import datetime
import json
import time, datetime
from threading import Thread, Timer
from typing import List
from serial import Serial, SerialException, PARITY_NONE
from sqlitedict import SqliteDict
import baselogger
from connection_handler import ConnectionHandler
from constants import Message, StoreParams, MaintenanceEvents, ErrorEvents, Peripherals
from slave_requests import Requests
import RPi.GPIO as GPIO
import sys

GPIO.setmode(GPIO.BOARD)
GPIO.setup(12, GPIO.OUT)

now = lambda: int(time.time())
datenow = lambda: datetime.datetime.now()

logToFile = True


class SlaveController(Thread):
    def __init__(self, device_id):
        super(SlaveController, self).__init__()
        self.device_id = device_id
        self.__run_controller = False
        self.__ser = Serial('/dev/ttyUSB0', 115200, timeout=2.0, parity=PARITY_NONE)
        self.__slave_requests = Requests()
        self.connectionHandler = ConnectionHandler(self.device_id)
        self.messages = Message()
        self.storeparams = StoreParams()
        self.maintenanceevent = MaintenanceEvents()
        self.peripherals = Peripherals()
        self.errorevent = ErrorEvents()
        self.slaveVersion = "00.00"
        self.store = SqliteDict('./processdata.sqlite', autocommit=True, encode=json.dumps, decode=json.loads)
        print(self.store)
        if logToFile:
            self.logger = baselogger.get_logger('Slave Controller')
            self.logger.info("Initiated...")
        self.light_brightness = 100
        self.brightness_control = GPIO.PWM(12, 100)
        self.connectionHandler.client.on_message = self.cloudMessage
        self.connectionHandler.connect()
        self.__isUserControlling = False
        self.__data = {}
        self.__previousData = {}
        self.__alarm = {}
        self.__settings = {}
        self.__previousAlarm = {}
        self.__lastUpdatedTime = now()
        self.__lastSettingPolledTime = 0
        self.__maintenanceModeExitAt = 0
        self.__isLightAsPerSchedule = True
        self.__wasAnySettingUpdated = False
        self.lastUserInputTime = 0
        self.__isMaintenanceActive = False
        self.schLightState = False
        self.peripheralsMaintenanceState = {
            self.peripherals.water_pump: False,
            self.peripherals.water_chiller: False,
            self.peripherals.supplement_ec_pump: False,
            self.peripherals.supplement_ph_inc_pump: False,
            self.peripherals.supplement_ph_dec_pump: False,
            "light_1":False,
            "light_2":False,
            "light_3":False,
            "light_4":False,
            "light_5":False,
            "light_brightness": False
        }
        self.uartError = False
        self.supplementLevels = {
            "supp_ph_inc": 1,
            "supp_ph_dec": 1,
            "supp_ec_a": 1,
            "supp_ec_b": 1
        }
        self.isComBusy = False
        self.crcErrorCount = 0
        self.wasAlarmError = False

    def run(self):
        if logToFile:
            self.logger.info("Started running...")
        self.brightness_control.start(self.light_brightness)
        # self.checkLightSchedule()
        if datetime.time(21, 0, 0) > datetime.time(datenow().hour, datenow().minute, datenow().second) > datetime.time(
                7, 0, 0):
            if logToFile:
                self.logger.removeHandler(self.logger.handlers[0])
                self.logger = baselogger.get_logger('Slave Controller')
            self.connectionHandler.re_init_logger()
            print("Turning ON All Lights per schedule")
            self.light_brightness = 100
            self.brightness_control.ChangeDutyCycle(self.light_brightness)
            self.setLightStatus(255, 1)
            self.schLightState = True
        else:
            print("Turning OFF All Lights per schedule")
            self.setLightStatus(255, 0)
            self.light_brightness = 0
            self.brightness_control.ChangeDutyCycle(self.light_brightness)
            self.schLightState = False
        self.__run_controller = True
        time.sleep(0.5)
        self.checkSlaveSettings()
        time.sleep(0.5)
        self.checkSlaveStatus()
        pre = self.__isUserControlling
        self.getSlaveVersion()
        z = 0
        while self.__run_controller:
            # print(">>",self.lastUserInputTime, self.lastUserInputTime + 5 < now())
            time.sleep(10)
            self.checkLightSchedule()
            if self.__maintenanceModeExitAt + 10 < now() and not self.__isLightAsPerSchedule:
                self.setLightAsPerSchedule()
            else:
                self.logger.warn("Light is not per schedule / maintenance "+str(self.__maintenanceModeExitAt)+"  :  "+str(self.__isLightAsPerSchedule))
            if self.__wasAnySettingUpdated:
                if logToFile: self.logger.info("Updating settings as user is in Home")
                if not self.isComBusy:
                    self.checkSlaveSettings()
                    time.sleep(0.5)
                if not self.isComBusy:
                    self.checkSlaveStatus()
                    time.sleep(0.5)
                self.__wasAnySettingUpdated = False
            if self.__isUserControlling is False:
                if pre is not self.__isUserControlling:
                    if logToFile: self.logger.info(
                        "Updating settings as user is in Home using pre" + str(self.__isUserControlling) + " " + str(
                            self.lastUserInputTime))
                    self.checkSlaveSettings()
                    pre = self.__isUserControlling
            if self.__isUserControlling is False:
                if self.lastUserInputTime + 5 < now():
                    if logToFile: self.logger.info("Is UserControlling... " + str(self.__isUserControlling))
                    # while self.isComBusy: pass
                    # if self.isComBusy: self.__ser.flush()
                    self.checkSlaveStatus()
                    time.sleep(5)
            else:
                pre = self.__isUserControlling
            if self.__lastUpdatedTime + 10 < now():
                pubRes = self.__data.copy()
                pubRes["timestamp"] = now()
                resStr = ""
                if not self.uartError:
                    for i in range(len(self.__data["light_stat"])):
                        if self.__data["light_stat"][i] == 1:
                            resStr += "true"
                        else:
                            resStr += "false"
                        resStr += ":"
                    resStr = resStr[:-1]
                    pubRes["light_stat"] = resStr
                    pubRes["light_brightness"] = self.light_brightness
                    self.supplementLevels["supp_ph_inc"] = str(int(not int(pubRes["supp_ph_inc"])))
                    self.supplementLevels["supp_ph_dec"] = str(int(not int(pubRes["supp_ph_dec"])))
                    self.supplementLevels["supp_ec_a"] = str(int(not int(pubRes["supp_ec_a"])))
                    self.supplementLevels["supp_ec_b"] = str(int(not int(pubRes["supp_ec_b"])))
                    self.connectionHandler.publish(self.messages.data, json.dumps(pubRes))
                    # if self.__data["error"] == "1":
                    # pubAlarmRes = None
                    if not self.wasAlarmError:
                        pubAlarmRes = self.__alarm.copy()
                        pubAlarmRes.update(self.supplementLevels)
                        pubAlarmRes["timestamp"] = now()
                        print("ALARM  : ", pubAlarmRes)
                        self.connectionHandler.publish(self.messages.alarm, json.dumps(pubAlarmRes))
                    # self.checkCloudMaintenanceControl("ALL")
                    self.store.commit()
                    self.__lastUpdatedTime = now()
                else:
                    if self.crcErrorCount > 20:
                        self.connectionHandler.publish(self.messages.error, json.dumps({"uart": "ERROR"}))
                        self.__data = dict.fromkeys(self.__data, 0)
                        self.wasAlarmError = True

    def stop(self):
        if logToFile: self.logger.info("Stopped...")
        self.__run_controller = False

    def pollSlave(self, request, need_response=True):
        self.isComBusy = True
        try:
            # while not self.__ser.getCTS() : pass
            # print("PAYLOAD : ", request)
            if logToFile: self.logger.info("PAYLOAD : %s" % request)
            request = self.appendCRC(request)
            # print("SEND : ", request)
            if logToFile: self.logger.info("SEND : %s" % request)
            self.__ser.write(request.encode('utf-8'))
            if need_response:
                response = self.__ser.readline().decode('utf-8').rstrip()
                # print("RECEIVE : ", response)
                if logToFile: self.logger.info("RECEIVE : %s" % response)
                response = ",".join(response.split(",")[0:-1])
                if logToFile: self.logger.info("RECEIVE DD: %s " % response)
                if self.checkCRC(response) is not True:
                    self.uartError = True
                    self.isComBusy = False
                    self.crcErrorCount += 1
                    raise ValueError("CRC invalid")
                else:
                    self.uartError = False
                    self.crcErrorCount = 0
                    self.isComBusy = False
                return response
            else:
                return True
        except Exception as exc:
            # print("error while polling:", exc)
            self.uartError = True
            self.connectionHandler.publish(self.messages.error, json.dumps({"UART": "ERROR "}))
            if logToFile: self.logger.error("error while polling slave %s" % exc)
            self.isComBusy = False
            return False

    def appendCRC(self, request):
        crcString = request
        MyList = request.split(",")
        strLen = len(MyList)
        crc = 0
        for i in range(0, strLen):
            crc = crc + float(MyList[i])
        crc = crc + 10
        crcString = crcString + ',' + str(crc)
        return crcString + "\n"

    def checkCRC(self, response):
        crcString = response
        MyList = response.split(",")
        strLen = len(MyList)
        crc = 0
        for i in range(0, strLen - 1):
            crc = crc + float(MyList[i])
        crc = crc + 10
        rxCRC = MyList[strLen - 1]
        # print(rxCRC , crc)
        if int(float(rxCRC)) == int(crc):
            crcIsValid = True
        else:
            crcIsValid = False
        return crcIsValid

    def getSlaveVersion(self):
        version = self.pollSlave(self.__slave_requests.get_version())
        if version is not False:
            version = self.__slave_requests.Decode.version(version)
            if version is not False:
                self.slaveVersion = version

    def checkLightSchedule(self):
        # print("Light", self.schLightState)
        if datetime.time(21, 0, 0) > datetime.time(datenow().hour, datenow().minute, datenow().second) > datetime.time(
                7, 0, 0):
            if not self.schLightState:
                if logToFile: self.logger.removeHandler(self.logger.handlers[0])
                if logToFile: self.logger = baselogger.get_logger('Slave Controller')
                self.connectionHandler.re_init_logger()
                print("Turning ON All Lights per schedule")
                self.light_brightness = 100
                self.brightness_control.ChangeDutyCycle(self.light_brightness)
                self.setLightStatus(255, 1)
            self.schLightState = True
        else:
            if self.schLightState:
                print("Turning OFF All Lights per schedule")
                self.setLightStatus(255, 0)
                self.light_brightness = 0
                self.brightness_control.ChangeDutyCycle(self.light_brightness)
            self.schLightState = False

    def setLightAsPerSchedule(self):
        # print("Light", self.schLightState)
        self.__isLightAsPerSchedule = True
        if datetime.time(21, 0, 0) > datetime.time(datenow().hour, datenow().minute, datenow().second) > datetime.time(
                7, 0, 0):
                print("Turning ON All Lights per schedule")
                self.light_brightness = 100
                self.brightness_control.ChangeDutyCycle(self.light_brightness)
                self.setLightStatus(255, 1)
        else:
                print("Turning OFF All Lights per schedule")
                self.setLightStatus(255, 0)
                self.light_brightness = 0
                self.brightness_control.ChangeDutyCycle(self.light_brightness)

    def checkSlaveStatus(self):
        # time.sleep(1)
        if self.isComBusy: self.__ser.flushInput()
        if logToFile: self.logger.info("Polling slave data")
        decoded_data = self.__slave_requests.Decode.data(self.pollSlave(self.__slave_requests.get_data()))
        if logToFile: self.logger.warn("Decoded Data : " + json.dumps(decoded_data))
        if decoded_data is not False:
            self.__previousData = self.__data
            decoded_data["light_brightness"] = self.light_brightness
            self.__data = decoded_data
            # if self.__data["error"] == "1":
            #     self.logger.error("Alarm Polling Error")
            time.sleep(0.25)
        else:
            self.__ser.flushInput()
            self.__ser.flushOutput()
            self.__ser.flush()
            self.uartError = True
            self.crcErrorCount += 1
        decoded_alarm = self.__slave_requests.Decode.alarm(self.pollSlave((self.__slave_requests.get_alarm())))
        if logToFile: self.logger.warn("Decoded Alarm : " + json.dumps(decoded_alarm))
        if decoded_alarm is not False:
            self.__previousAlarm = self.__alarm
            self.__alarm = decoded_alarm
            # print(self.__alarm)
            # self.__data["error"] = 0
            self.wasAlarmError = False
        else:
            self.wasAlarmError = True
            self.__ser.flushInput()
            self.__ser.flushOutput()
            self.__ser.flush()
            self.uartError = True
            self.crcErrorCount += 1
            # else:
            #     print("Has alarm")
            #
            # else:
            #     print("not notty decoded")
        time.sleep(1)

    def checkSlaveSettings(self):
        if logToFile: self.logger.info("Polling slave settings")
        settings = self.__slave_requests.Decode.settings((self.pollSlave(self.__slave_requests.get_settings())))
        if logToFile: self.logger.info("Received Settings : " + json.dumps(settings))
        if settings is not False:
            self.__settings = settings
        else:
            # time.sleep(1)
            self.checkSlaveSettings()

    def getSettings(self):
        self.__isUserControlling = True
        if logToFile: self.logger.info("User In Settings " + str(self.__isUserControlling))
        # self.checkSlaveSettings()
        self.lastUserInputTime = now()
        return self.__settings

    def getSlaveData(self):
        self.__isUserControlling = False
        # self.checkSlaveStatus()
        return {"data": self.__data, "alarm": self.__alarm}

    def setLightStatus(self, light, state):
        # while self.isComBusy: pass
        if self.isComBusy: self.__ser.flushInput()
        result = False
        # print(type(light), type(state))
        if light == 0:
            result = self.pollSlave(self.__slave_requests.Lights.set_brightness(state), need_response = False)
            self.light_brightness = state
            self.brightness_control.ChangeDutyCycle(self.light_brightness)
            self.store[self.storeparams.lightbrightness] = state
        elif light == 255:
            result = self.pollSlave((self.__slave_requests.Lights.set_all_lights(state)), need_response=False)
            self.store[self.storeparams.alllights] = state
        else:
            result = self.pollSlave(self.__slave_requests.Lights.set_light(light, state), need_response=False)
            # print(result)
            self.store[self.storeparams.lights(light)] = state
        # print("LIGHT", result)
        # self.logger.info("Lights "+result)
        self.lastUserInputTime = now()
        if logToFile: self.logger.info(">> Pressing light " + str(self.lastUserInputTime))
        # while self.isComBusy: pass
        if self.isComBusy: self.__ser.flushInput()
        self.checkSlaveStatus()
        return True if result is not False else False

    def setNewSettings(self, stype, params):
        while self.isComBusy: pass
        result = False
        # print(stype, params)
        if stype == 1:
            print('water pump')
            # print("",self.__slave_requests.Settings.set_pump_time(params["ontime"], params["offtime"]))
            if logToFile: self.logger.info("Update water pump settings")
            # print(len(tx), tx)
            result = self.pollSlave(self.__slave_requests.Settings.set_pump_time(params["offtime"], params["ontime"]))
            self.store[self.storeparams.settings.water_pump_settings] = params
            self.connectionHandler.publish(self.messages.setting, json.dumps({"water_pump": params}))
        elif stype == 2:
            print('pH Limits')
            if logToFile: self.logger.info("Update pH settings")
            result = self.pollSlave(
                self.__slave_requests.Settings.set_ph_levels(params["phmin"], params["phmax"], params["phideal"]))
            self.store[self.storeparams.settings.ph_settings] = params
            self.connectionHandler.publish(self.messages.setting, json.dumps({"ph_thresholds": params}))
        elif stype == 3:
            print('ec limits')
            if logToFile: self.logger.info("Update eC settings")
            result = self.pollSlave(self.__slave_requests.Settings.set_ec_levels(params["ecmin"], params["ecideal"]))
            self.store[self.storeparams.settings.ec_settings] = params
            self.connectionHandler.publish(self.messages.setting, json.dumps({"ec_thresholds": params}))
        elif stype == 4:
            print('water temp limits')
            if logToFile: self.logger.info("Update water temperature settings")
            result = self.pollSlave(
                self.__slave_requests.Settings.set_water_temperature(params["tempmax"], params["tempideal"]))
            self.store[self.storeparams.settings.water_temperature_settings] = params
            self.connectionHandler.publish(self.messages.setting, json.dumps({"water_temperature": params}))
        elif stype == 5:
            print('supplemnet pump times')
            if logToFile: self.logger.info("Update supplement pump settings")
            result = self.pollSlave(
                self.__slave_requests.Settings.set_supplement_pump_time(params["ec"], params["phinc"], params["phinc"],
                                                                        params["cycle"]))
            self.store[self.storeparams.settings.supplement_pump_settings] = params
            self.connectionHandler.publish(self.messages.setting, json.dumps({"supplement_pump": params}))
        # print(result)
        self.__wasAnySettingUpdated = True
        self.lastUserInputTime = now()
        self.checkSlaveSettings()
        return True if result is not False else False

    def restartController(self):
        result = self.pollSlave(self.__slave_requests.restart())
        if logToFile: self.logger.info("Restarting Controller...")
        return True if result is not False else False

    def setMaintenanceState(self, state):
        # print(state, self.__isUserControlling)
        print("Maintenance state seting - ", state, self.__isMaintenanceActive)
        while self.isComBusy: pass
        self.__isUserControlling = state
        if self.__isMaintenanceActive != state:
            result = self.pollSlave(
                self.__slave_requests.Maintenance.start() if state else self.__slave_requests.Maintenance.stop()
            )
            self.connectionHandler.publish(self.messages.notification, json.dumps({"Maintainance": state}))
            print("published-----")
            if logToFile: self.logger.info(self.maintenanceevent.status(state))
            self.lastUserInputTime = now()
            self.__isMaintenanceActive = state
            return True if result is not False else False
        return True

    def evalExitMaintenanceMode(self):
        res = True
        for peripheral in self.peripheralsMaintenanceState:
            if self.peripheralsMaintenanceState[peripheral]:
                res = False
        print("eval maint res : ", res)
        if res:
            self.setMaintenanceState(False)
            self.__maintenanceModeExitAt = now()

    def setMaintenanceControl(self, mtype, state):
        result = False
        if not self.__isMaintenanceActive:
            self.setMaintenanceState(True)
        state = int(state)
        while self.isComBusy: pass
        if mtype == 1:
            print(self.peripherals.water_pump)
            result = self.pollSlave(self.__slave_requests.Maintenance.set_water_pump(state))
            if logToFile: self.logger.info(self.maintenanceevent.water_pump(state))
            self.connectionHandler.publish(self.messages.event,
                                           json.dumps({"event": self.maintenanceevent.water_pump(state)}))
            self.peripheralsMaintenanceState[self.peripherals.water_pump] = bool(state)
        elif mtype == 2:
            print(self.peripherals.water_chiller)
            result = self.pollSlave(self.__slave_requests.Maintenance.set_water_chiller(state))
            if logToFile: self.logger.info(self.maintenanceevent.water_chiller(state))
            self.connectionHandler.publish(self.messages.event,
                                           json.dumps({"event": self.maintenanceevent.water_chiller(state)}))
            self.peripheralsMaintenanceState[self.peripherals.water_chiller] = bool(state)
        elif mtype == 3:
            print(self.peripherals.supplement_ec_pump)
            result = self.pollSlave(self.__slave_requests.Maintenance.set_ec_pump(state))
            if logToFile: self.logger.info(self.maintenanceevent.ec_pump(state))
            self.connectionHandler.publish(self.messages.event,
                                           json.dumps({"event": self.maintenanceevent.ec_pump(state)}))
            self.peripheralsMaintenanceState[self.peripherals.supplement_ec_pump] = bool(state)
        elif mtype == 4:
            print(self.peripherals.supplement_ph_inc_pump)
            result = self.pollSlave(self.__slave_requests.Maintenance.set_ph_inc_pump(state))
            if logToFile: self.logger.info(self.maintenanceevent.ph_inc_pump(state))
            self.connectionHandler.publish(self.messages.event,
                                           json.dumps({"event": self.maintenanceevent.ph_inc_pump(state)}))
            self.peripheralsMaintenanceState[self.peripherals.supplement_ph_inc_pump] = bool(state)
        elif mtype == 5:
            print(self.peripherals.supplement_ph_dec_pump)
            result = self.pollSlave(self.__slave_requests.Maintenance.set_ph_dec_pump(state))
            if logToFile: self.logger.info(self.maintenanceevent.ph_dec_pump(state))
            self.connectionHandler.publish(self.messages.event,
                                           json.dumps({"event": self.maintenanceevent.ph_dec_pump(state)}))
            self.peripheralsMaintenanceState[self.peripherals.supplement_ph_dec_pump] = bool(state)
        elif mtype == 6 :
            print(self.peripherals.lights)
            self.__isLightAsPerSchedule = False
            self.setLightStatus(1, state)
            self.peripheralsMaintenanceState["light_1"] = bool(state)
        elif mtype == 7:
            print(self.peripherals.lights)
            self.__isLightAsPerSchedule = False
            self.setLightStatus(2, state)
            self.peripheralsMaintenanceState["light_2"] = bool(state)
        elif mtype == 8:
            print(self.peripherals.lights)
            self.__isLightAsPerSchedule = False
            self.setLightStatus(3, state)
            self.peripheralsMaintenanceState["light_3"] = bool(state)
        elif mtype == 9:
            print(self.peripherals.lights)
            self.__isLightAsPerSchedule = False
            self.setLightStatus(4, state)
            self.peripheralsMaintenanceState["light_4"] = bool(state)
        elif mtype == 10:
            print(self.peripherals.lights)
            self.__isLightAsPerSchedule = False
            self.setLightStatus(5, state)
            self.peripheralsMaintenanceState["light_5"] = bool(state)
        if not state:
            self.evalExitMaintenanceMode()
        # elif mtype == 6:
        #     print(self.peripherals.light_brightness)
        #     self.setLightStatus(state["light"], state["state"])
        #     self.connectionHandler.publish(self.messages.event, self.maintenanceevent.ph_dec_pump(state))
        return True if result is not False else False

    def cloudMessage(self, client, usr, msg):
        if logToFile: self.logger.info("Received downward data : %s" % msg)
        cmType = msg.topic.split("/")[2]
        cmMsg = json.loads(msg.payload)
        if logToFile: self.logger.info("DOWNLINK -----> " + cmType + "   " + json.dumps(cmMsg))
        try:
            if cmType == "maintenance":
                self.processAdhoc(cmMsg)
            if cmType == "settings":
                if cmMsg["water_pump"]:
                    onT = int(cmMsg["water_pump"]["ontime"].split(":")[0])
                    offT = (int(cmMsg["water_pump"]["offtime"].split(":")[0]) * 60) + int(
                        cmMsg["water_pump"]["offtime"].split(":")[1])
                    cmMsg["water_pump"]["offtime"] = 90
                    cmMsg["water_pump"]["ontime"] = 20
                    self.setNewSettings(1, cmMsg["water_pump"])
                if cmMsg["ph_thresholds"]:
                    cmMsg["ph_thresholds"]["phmin"] = float(cmMsg["ph_thresholds"]["phideal"]) - 0.25
                    cmMsg["ph_thresholds"]["phmax"] = float(cmMsg["ph_thresholds"]["phideal"]) + 0.25
                    cmMsg["ph_thresholds"]["phideal"] = float(cmMsg["ph_thresholds"]["phideal"])
                    self.setNewSettings(2, cmMsg["ph_thresholds"])
                if cmMsg["ec_thresholds"]:
                    cmMsg["ec_thresholds"]["ecmin"] = int((float(cmMsg["ec_thresholds"]["ecideal"])) - 100)
                    cmMsg["ec_thresholds"]["ecideal"] = int(float(cmMsg["ec_thresholds"]["ecideal"]))
                    self.setNewSettings(3, cmMsg["ec_thresholds"])
                if cmMsg["water_temperature"]:
                    cmMsg["water_temperature"]["tempmax"] = 30  # float(cmMsg["water_temperature"]["tempideal"])+2
                    cmMsg["water_temperature"]["tempideal"] = 28  # float(cmMsg["water_temperature"]["tempideal"])
                    self.setNewSettings(4, cmMsg["water_temperature"])
                if cmMsg["supplement_pump"]:
                    cmMsg["supplement_pump"]["ec"] = 40
                    cmMsg["supplement_pump"]["phinc"] = 10
                    cmMsg["supplement_pump"]["cycle"] = int(cmMsg["supplement_pump"]["cycle"]) * (20 + 90)
                    self.setNewSettings(5, cmMsg["supplement_pump"])
        except Exception as e:
            if logToFile: self.logger.error("Error in Downlink Message", e)

    def processAdhoc(self, cmMsg):
        # while self.isComBusy: pass
        if logToFile: self.logger.info(json.dumps(cmMsg))
        while self.isComBusy: pass
        self.setMaintenanceState(True)
        if len(cmMsg["water_pump"].split(":")) == 2:
            wptime = int(cmMsg["water_pump"].split(":")[0]) * 60 + int(cmMsg["water_pump"].split(":")[1])
            if wptime != 0:
                self.setMaintenanceControl(self.peripherals.getCode(self.peripherals.water_pump), True)
                wpt = Timer(wptime, self.setMaintenanceControl,
                            (self.peripherals.getCode(self.peripherals.water_pump), False))
                wpt.start()
        if len(cmMsg["water_temperature_time"].split(":")) == 2:
            wtttime = int(cmMsg["water_temperature_time"].split(":")[0]) * 60 + int(
                cmMsg["water_temperature_time"].split(":")[1])
            if wtttime != 0:
                self.setMaintenanceControl(self.peripherals.getCode(self.peripherals.water_chiller), True)
                wtt = Timer(wtttime, self.setMaintenanceControl,
                            (self.peripherals.getCode(self.peripherals.water_chiller), False))
                wtt.start()
        if len(cmMsg["ec_pump"].split(":")) == 2:
            ecptime = int(cmMsg["ec_pump"].split(":")[0]) * 60 + int(cmMsg["ec_pump"].split(":")[1])
            if ecptime != 0:
                self.setMaintenanceControl(self.peripherals.getCode(self.peripherals.supplement_ec_pump), True)
                ect = Timer(ecptime, self.setMaintenanceControl,
                            (self.peripherals.getCode(self.peripherals.supplement_ec_pump), False))
                ect.start()
        if len(cmMsg["ph_inc_pump"].split(":")) == 2:
            piptime = int(cmMsg["ph_inc_pump"].split(":")[0]) * 60 + int(cmMsg["ph_inc_pump"].split(":")[1])
            if piptime != 0:
                self.setMaintenanceControl(self.peripherals.getCode(self.peripherals.supplement_ph_inc_pump), True)
                pit = Timer(piptime, self.setMaintenanceControl,
                            (self.peripherals.getCode(self.peripherals.supplement_ph_inc_pump), False))
                pit.start()
        if len(cmMsg["ph_decc_pump"].split(":")) == 2:
            pdptime = int(cmMsg["ph_decc_pump"].split(":")[0]) * 60 + int(cmMsg["ph_decc_pump"].split(":")[1])
            if pdptime != 0:
                self.setMaintenanceControl(self.peripherals.getCode(self.peripherals.supplement_ph_dec_pump), True)
                pdt = Timer(pdptime, self.setMaintenanceControl,
                            (self.peripherals.getCode(self.peripherals.supplement_ph_dec_pump), False))
                pdt.start()
        if len(cmMsg["light_1"].split(":")) == 2:
            l1ttime = int(cmMsg["light_1"].split(":")[0]) * 60 + int(cmMsg["light_1"].split(":")[1])
            if l1ttime != 0:
                self.setMaintenanceControl(6, True)
                l1t = Timer(l1ttime, self.setMaintenanceControl, (6, False))
                l1t.start()
        if len(cmMsg["light_2"].split(":")) == 2:
            l2ttime = int(cmMsg["light_2"].split(":")[0]) * 60 + int(cmMsg["light_2"].split(":")[1])
            if l2ttime:
                self.setMaintenanceControl(7, True)
                l2t = Timer(l2ttime, self.setMaintenanceControl, (7, False))
                l2t.start()
        if len(cmMsg["light_3"].split(":")) == 2:
            l3ttime = int(cmMsg["light_3"].split(":")[0]) * 60 + int(cmMsg["light_3"].split(":")[1])
            if l3ttime:
                self.setMaintenanceControl(8, True)
                l3t = Timer(l3ttime, self.setMaintenanceControl, (8, False))
                l3t.start()
        if len(cmMsg["light_4"].split(":")) == 2:
            l4ttime = int(cmMsg["light_4"].split(":")[0]) * 60 + int(cmMsg["light_4"].split(":")[1])
            if l4ttime:
                self.setMaintenanceControl(9, True)
                l4t = Timer(l4ttime, self.setMaintenanceControl, (9, False))
                l4t.start()
        if len(cmMsg["light_5"].split(":")) == 2:
            l5ttime = int(cmMsg["light_5"].split(":")[0]) * 60 + int(cmMsg["light_5"].split(":")[1])
            if l5ttime:
                self.setMaintenanceControl(10, True)
                l5t = Timer(l5ttime, self.setMaintenanceControl, (10, False))
                l5t.start()
        if len(cmMsg["light_brightness_time"].split(":")) == 2:
            lbttime = int(cmMsg["light_brightness_time"].split(":")[0]) * 60 + int(
                cmMsg["light_brightness_time"].split(":")[1])
            if lbttime:
                btlev = int(cmMsg["light_brightness"])
                curBtlev = self.light_brightness
                self.setLightStatus(0, btlev)
                lbtt = Timer(lbttime, self.setLightStatus, (0, curBtlev))
                lbtt.start()
            # >> > now = lambda: datetime.datetime.now()
            # >> > now()
            # datetime.datetime(2022, 5, 24, 16, 15, 13, 114808)
            # >> > k > datetime.time(now().hour, now().minute)
            # True
            # >> > k < datetime.time(now().hour, now().minute)
            # False
            # >> > datetime.time(21, 0, 0) > datetime.time(now().hour, now().minute, now().second) > datetime.time(7, 0,
            #                                                                                                      0)
            # True
            # >> > datetime.time(21, 0, 0) > datetime.time(now().hour, now().minute, now().second) > datetime.time(7, 0,
            #                                                                                                      0)
            # True
            # >> > datetime.time(21, 0, 0) > datetime.time(now().hour, now().minute, now().second) > datetime.time(7, 0,
            #                                                                                                      0)
