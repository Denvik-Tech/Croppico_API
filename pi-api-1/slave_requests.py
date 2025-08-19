class Requests:
    def __init__(self):
        self.Maintenance = Maintenance()
        self.Lights = Lights()
        self.Settings = Settings()
        self.Decode = Decode()

    @staticmethod
    def get_data():
        return "00,11"

    @staticmethod
    def get_alarm():
        return "00,99"

    @staticmethod
    def get_settings():
        return "00,55"

    @staticmethod
    def get_calib_result():
        return "00,66"

    @staticmethod
    def put_calib_status():
        return "00,88,01"

    @staticmethod
    def put_ph_inc_status():
        return "00,89,01"

    @staticmethod
    def put_ph_dec_status():
        return "00,89,02"

    @staticmethod
    def restart():
        return "00,77"

    @staticmethod
    def reseterror():
        return "00,44"

    @staticmethod
    def get_version():
        return "00,33"


class Maintenance:
    @staticmethod
    def start():
        return "00,00,00,01"

    @staticmethod
    def stop():
        return "00,00,00,00"

    @staticmethod
    def __general_maint_mode_format(mtype, status):
        return "00,00," + str(mtype).zfill(2) + "," + str(status).zfill(2)

    def set_water_pump(self, status):
        return self.__general_maint_mode_format(1, status)

    def set_water_chiller(self, status):
        return self.__general_maint_mode_format(2, status)

    def set_ec_pump(self, status):
        return self.__general_maint_mode_format(3, status)

    def set_ph_inc_pump(self, status):
        return self.__general_maint_mode_format(4, status)

    def set_ph_dec_pump(self, status):
        return self.__general_maint_mode_format(5, status)

    def set_ec_a_pump(self, status):
        return self.__general_maint_mode_format(6, status)

    def set_ec_b_pump(self, status):
        return self.__general_maint_mode_format(7, status)


class Lights:
    @staticmethod
    def set_light(pos, status):
        return "00,01," + str(pos).zfill(2) + "," + str(status).zfill(2)

    def set_brightness(self, level):
        return self.set_light(0, level)

    def set_all_lights(self, status):
        return self.set_light(255, status)


class Settings:

    @staticmethod
    def start_controller():
        return "11,11,11"

    @staticmethod
    def stop_controller():
        return "99,99,99"

    @staticmethod
    def reset_controller():
        return "00,02,00,01"

    @staticmethod
    def set_ph_levels(phmin, phmax, phideal, pherror, phpumperror):
        return "00,02,02," + str(phmin) + "," + str(phmax) + "," + str(phideal) + "," + str(pherror) + "," + str(phpumperror)

    @staticmethod
    def set_ec_levels(ecMin, ecIdeal, ecerror, ecpumperror):
        return "00,02,03," + str(ecMin) + "," + str(ecIdeal) + "," + str(ecerror) + "," + str(ecpumperror)

    @staticmethod
    def set_supplement_pump_time(ec, phinc, phdec, cycle):
        return "00,02,05," + str(ec) + "," + str(phinc) + "," + str(phdec) + "," + str(cycle)

    @staticmethod
    def set_ph_constant_value(phconstant):
        return "00,02,06,01," + str(phconstant)

    @staticmethod
    def set_ec_constant_value(ecconstant):
        return "00,02,06,02," + str(ecconstant)

    @staticmethod
    def set_EC_A_pump_value(ecA):
        return "00,02,07,01," + str(ecA)

    @staticmethod
    def set_EC_B_pump_value(ecB):
        return "00,02,07,02," + str(ecB)

    @staticmethod
    def set_Flow_sensor_value(flow):
        return "00,02,07,03," + str(flow)

    @staticmethod
    def putnumberofsolutionph(count):  # ph count
        return "00,22,01," + str(count)

    @staticmethod
    def putnumberofsolutionec(count):  # ec count
        return "00,22,02," + str(count)

    # @staticmethod
    # def turn_on_ec_a_pump():
    #     return "00,02,07,03"
    #
    # @staticmethod
    # def turn_on_ec_b_pump():
    #     return "00,02,07,04"

    @staticmethod
    def __general_setting_format(stype, opt1, opt2):
        return "00,02," + str(stype).zfill(2) + "," + str(opt1).zfill(3) + "," + str(opt2).zfill(3)

    def set_pump_time(self, ontime, offtime):
        return self.__general_setting_format(1, ontime, offtime)

    # def set_ec_levels(self, ecMin, ecIdeal):
    #     return self.__general_setting_format(3, ecMin, ecIdeal)

    def set_water_temperature(self, wTempMax, wTempIdeal):
        return self.__general_setting_format(4, wTempMax, wTempIdeal)


class Decode:
    @staticmethod
    def version(result):
        try:
            return ".".join(result.split(",")[0:-1])
        except:
            return False

    @staticmethod
    def calibresult(result):
        result = result.split(",")
        return result[0]

    @staticmethod
    def data(result):
        if result is False: return False
        result = result.split(",")
        if len(result) != 21:
            return False
        lightStat = list(result[12])
        if len(lightStat) is not 5:
            return False
        for k in range(len(lightStat)):
            if int(lightStat[k]) == 9:
                lightStat[k] = 0
            elif int(lightStat[k]) == 1:
                lightStat[k] = 1
            else:
                return False
        return {
            "water_temperature": result[0],
            "water_level": result[1],
            "water_flow": result[2],
            "ambient_temp": result[3],
            "ambient_humid": result[4],
            "water_pH": result[5],
            "water_ec": result[6],
            "supp_ph_inc": result[7],
            "supp_ph_dec": result[8],
            "supp_ec_a": result[9],
            "supp_ec_b": result[10],
            "light_brightness": result[11],
            "light_stat": lightStat,
            "irrigation_state": result[13],
            "chiller_state": result[14],
            "ec_a_pump": result[15],
            "ec_b_pump": result[16],
            "ph_inc_pump": result[17],
            "ph_dec_pump": result[18],
            # "ec_dose_state":result[19],
            # "ph_dose_state":result[20],
            "error": result[19]
        }

    @staticmethod
    def alarm(result):
        if result is False: return False
        result = result.split(",")
        if len(result) != 12:
            return False
        return {
            "water_pump": result[0],
            "water_flow_sensor": result[1],
            "water_chiller": result[2],
            "water_temperature_sensor": result[3],
            "ambient_sensor": result[4],
            "ph_sensor": result[5],
            "ec_sensor": result[6],
            "supp_ec_pump": result[7],
            "supp_ph_inc_pump": result[8],
            "supp_ph_dec_pump": result[9],
            "transpiration_error": result[10]
        }
        # val = 0 : no error || 1 : failure || 2 : communication

    @staticmethod
    def settings(result):
        if result is False: return False
        result = result.split(",")
        if len(result) != 18:
            return False
        return {
            "water_pump_setting": {
                "ontime": result[0],
                "offtime": result[1]
            },
            "ph_setting": {
                "phmin": result[2],
                "phmax": result[3],
                "phideal": result[4],
                "phsensor_setpoint": result[5],
                "phpump_setpoint": result[6]
            },
            "ec_setting": {
                "ecmin": result[7],
                "ecideal": result[8],
                "ecsensor_setpoint": result[9],
                "ecpump_setpoint": result[10]
            },
            "water_temperature_setting": {
                "tempmax": result[11],
                "tempideal": result[12]
            },
            "supplement_pump_setting": {
                "ec": result[13],
                "phinc": result[14],
                "phdec": result[15],
                "cycle": result[16]
            }
        }
