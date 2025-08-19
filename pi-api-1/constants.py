from voluptuous import Schema

on_code = "on"
off_code = "off"
communication_error = "communication-error"
sensor_failure = "sensor-failure"


def getserial():
    cpuserial = "0000000000000000"
    try:
        f = open('/proc/cpuinfo', 'r')
        for line in f:
            if line[0:6] == 'Serial':
                cpuserial = line[10:26]
        f.close()
    except:
        cpuserial = "ERROR000000000"
    return cpuserial


class Message:
    def __init__(self):
        self.data = "data"
        self.notification = "notification"
        self.error = "error"
        self.alarm = "alarm"
        self.authentication = "auth"
        self.event = "event"
        self.setting = "setting"


class StoreParams:
    def __init__(self):
        self.settings = SettingsParams()
        self.data = "data"
        self.lightbrightness = "light-brightness"
        self.alllights = "all-lights"
        self.__light = "light-"

    def lights(self, num):
        return self.__light + str(num)


class SettingsParams:
    def __init__(self):
        self.water_pump_settings = "water-pump-settings"
        self.ph_settings = "ph-settings"
        self.ec_settings = "ec-settings"
        self.water_temperature_settings = "water-temperature-settings"
        self.supplement_pump_settings = "supplement-pump-settings"
        self.ph_calib = "ph-calib"
        self.ec_calib = "ec-calib"


class MaintenanceEvents:
    def __init__(self):
        self.__maintenance = "maintenance"
        self.peripheral = Peripherals()

    def status(self, state):
        return self.__maintenance + self.state_code(state)

    def water_pump(self, state):
        return self.peripheral.water_pump + self.state_code(state)

    def water_chiller(self, state):
        return self.peripheral.water_chiller + self.state_code(state)

    def ec_pump(self, state):
        return self.peripheral.supplement_ec_pump + self.state_code(state)

    def ph_inc_pump(self, state):
        return self.peripheral.supplement_ph_inc_pump + self.state_code(state)

    def ph_dec_pump(self, state):
        return self.peripheral.supplement_ph_dec_pump + self.state_code(state)

    def ec_a_pump(self, state):
        return self.peripheral.supplement_ec_a_pump + self.state_code(state)

    def ec_b_pump(self, state):
        return self.peripheral.supplement_ec_b_pump + self.state_code(state)

    def state_code(self, state):
        if state:
            return " : " + on_code
        else:
            return " : " + off_code


class ErrorEvents:
    def __init__(self):
        self.peripheral = Peripherals()


class Peripherals:
    def __init__(self):
        self.water_temperature_sensor = "water-temperature-sensor"
        self.water_flow_sensor = "water-flow-sensor"
        self.water_level = "water-level"
        self.water_pump = "water-pump"
        self.water_chiller = "water-chiller"
        self.ambient_temperature = "ambient-temperature"
        self.ambient_humidity = "ambient-humidity"
        self.water_ph_sensor = "water-ph-sensor"
        self.water_ec_sensor = "water-ec-sensor"
        self.supplement_ec_pump = "supplement-ec-pump"
        self.supplement_ec_a_pump = "supplement-ec-a-pump"
        self.supplement_ec_b_pump = "supplement-ec-b-pump"
        self.supplement_ph_inc_pump = "supplement-ph-inc-pump"
        self.supplement_ph_dec_pump = "supplement-ph-dec-pump"
        self.supplement_ec_level_sensor = "supplement-ec-level-sensor"
        self.supplement_ph_inc_level_sensor = "supplement-ph-inc-level-sensor"
        self.supplement_ph_dec_level_sensor = "supplement-ph-dec-level-sensor"
        self.lights = "lights"
        self.light_brightness = "light_brightness"

    def getCode(self, peripheral):
        if peripheral == self.water_pump:
            return 1
        elif peripheral == self.water_chiller:
            return 2
        elif peripheral == self.supplement_ec_pump:
            return 3
        elif peripheral == self.supplement_ph_inc_pump:
            return 4
        elif peripheral == self.supplement_ph_dec_pump:
            return 5
        elif peripheral == self.light_brightness:
            return 6
        elif peripheral == self.supplement_ec_a_pump:
            return 7
        elif peripheral == self.supplement_ec_b_pump:
            return 8
