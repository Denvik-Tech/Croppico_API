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
    def restart():
        return "00,77"

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
    def set_ph_levels(phmin, phmax, phideal):
        return "00,02,02," + str(phmin) + "," + str(phmax) + "," + str(phideal)

    @staticmethod
    def set_supplement_pump_time(ec, phinc, phdec, cycle):
        return "00,02,05," + str(ec) + "," + str(phinc) + "," + str(phdec) + "," + str(cycle)

    @staticmethod
    def __general_setting_format(stype, opt1, opt2):
        return "00,02," + str(stype).zfill(2) + "," + str(opt1).zfill(3) + "," + str(opt2).zfill(3)

    def set_pump_time(self, ontime, offtime):
        return self.__general_setting_format(1, ontime, offtime)

    def set_ec_levels(self, ecMin, ecIdeal):
        return self.__general_setting_format(3, ecMin, ecIdeal)

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
    def data(result):
        if result is False : return False
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
            "irrigation_state":result[13],
            "chiller_state": result[14],
            "ec_a_pump":result[15],
            "ec_b_pump":result[16],
            "ph_inc_pump":result[17],
            "ph_dec_pump":result[18],
            # "ec_dose_state":result[19],
            # "ph_dose_state":result[20],
            "error": result[19]
        }

    @staticmethod
    def alarm(result):
        if result is False : return False
        result = result.split(",")
        if len(result) != 11:
            return False
        return {
            "water_pump": result[0],
            "water_flow_sensor":result[1],
            "water_chiller": result[2],
            "water_temperature_sensor": result[3],
            "ambient_sensor": result[4],
            "ph_sensor": result[5],
            "ec_sensor": result[6],
            "supp_ec_pump": result[7],
            "supp_ph_inc_pump": result[8],
            "supp_ph_dec_pump": result[9]
        }
        # val = 0 : no error || 1 : failure || 2 : communication

    @staticmethod
    def settings(result):
        if result is False : return False
        result = result.split(",")
        if len(result) != 14:
            return False
        return {
            "water_pump_setting": {
                "ontime": result[0],
                "offtime": result[1]
            },
            "ph_setting": {
                "phmin": result[2],
                "phmax": result[3],
                "phideal": result[4]
            },
            "ec_setting": {
                "ecmin": result[5],
                "ecideal": result[6]
            },
            "water_temperature_setting": {
                "tempmax": result[7],
                "tempideal": result[8]
            },
            "supplement_pump_setting": {
                "ec": result[9],
                "phinc": result[10],
                "phdec": result[11],
                "cycle": result[12]
            }
        }
