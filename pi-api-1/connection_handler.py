import requests
import time, json
import paho.mqtt.client as mqtt
import baselogger
from constants import Peripherals

logToFile = False


class ConnectionHandler:
    def __init__(self, device_id):
        self.client = mqtt.Client()
        self.device_id = device_id
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message
        if logToFile:
            self.logger = baselogger.get_logger('Connection Handler')
            self.logger.info("Initiated")
        self.connect()

    def re_init_logger(self):
        if logToFile:
            self.logger.removeHandler(self.logger.handlers[0])
            self.logger = baselogger.get_logger('Connection Handler')

    def on_connect(self, client, userdata, flags, rc):
        if logToFile: self.logger.info("Connected with MQTT broker")
        if rc == 0:
            self.client.connected_flag = True  # set flag
            print("Connected OK")
            self.client.subscribe("server/" + self.device_id + "/#")

    def on_message(self, client, userdata, msg):
        if logToFile: self.logger.info("Received payload %s" % msg)
        return msg

    def publish(self, dtype, data):
        try:
            if logToFile: self.logger.info("Publishing %s %s" % (dtype, data))
            self.client.publish(topic="croppico/" + self.device_id + "/" + dtype, payload=data)
        except:
            pass

    def connect(self):
        try:
            self.client.username_pw_set(username="homie", password="a'M5xu+N3RJ*_#")
            self.client.connect_async("ec2-65-0-156-233.ap-south-1.compute.amazonaws.com", 1883, 60)
            self.client.publish(topic="croppico/" + self.device_id + "/connection",
                                payload=json.dumps({"time": int(time.time())}))
            self.client.subscribe("server/" + self.device_id + "/#")
            self.client.loop_start()
        except:
            time.sleep(5)
            self.connect()
    # {
    # "device_id": < unique_id >,
    # "water_pump": < time in mins > / 0 if no
    # action is required,
    # "ph_inc_pump": < time in mins > / 0 if no
    # action is required,
    # "ph_dec_pump": < time in mins > / 0 if no
    # action is required,
    # "ec_pump": < time in mins > / 0 if no
    # action is required,
    # "water_temperature_time": < time in mins > / 0 if no
    # action is required
    # "water_temperature": < value > / 0
    # water_temperature_time is 0,
    # "light_1": < time in mins > / 0 if no
    # action is required,
    # "light_2": < time in mins > / 0 if no
    # action is required,
    # "light_3": < time in mins > / 0 if no
    # action is required,
    # "light_4": < time in mins > / 0 if no
    # action is required,
    # "light_5": < time in mins > / 0 if no
    # action is required,
    # "light_brightness_time": < time in mins > / 0 if no
    # action is required,
    # "light_brightness": < val > / 0 if light_brightnrss_time is 0,
    # }

    # {
    #     device_id: < unique_id >,
    # water_pump: {
    #               ontime: < int in minutes >
    #               offtime: < int in minutes >
    # },
    # ph_thresholds: {
    #               phmin: < float >
    #               phmax: < float >
    #               phideal: < float >
    # },
    # ec_thresholds: {
    #               ecmin: < int >
    #               ecideal: < int >
    # },
    # water_temperature: {
    #               tempmax: < float >,
    #               tempideal: < float >
    # },
    # supplement_pump: {
    #          ec: < int in minutes >,
    #          phinc: < int in minutes >,
    #          cycle: < int in minutes >
    # }
    #
    # }

#
# class API:
#     def __init__(self):
#         self.endpoint = "http://164.52.218.209/croppicodev"
#         self.logger = baselogger.get_logger('croppico API')
#
#     def post(self, data):
#         try:
#             res = requests.post(self.endpoint, json=data)
#             return res
#         except requests.exceptions.RequestException as exc:
#             self.logger.error("Error while calling post API %s" % exc)
