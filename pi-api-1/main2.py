from flask import Flask, request
from flask_cors import CORS
import constants
from slave_controller import SlaveController
import baselogger

app = Flask(__name__)
CORS(app)
# device_id = constants.getserial()
# slave = SlaveController(device_id)


sample = {
    "data": {
        "water_temperature": 14.5,
        "water_level": 1,
        "water_flow": 16,
        "ambient_temp": 23,
        "ambient_humid": 78,
        "water_pH": 8.1,
        "water_ec": 2000,
        "supp_ph_inc": 1,
        "supp_ph_dec": 1,
        "supp_ec_a": 1,
        "supp_ec_b": 1,
        "light_brightness": 70,
        "light_stat": [1, 0, 1, 0, 1],
        "error": 0
    },
    "settings": {
        "water_pump_setting": {
            "ontime": 30,
            "offtime": 40
        },
        "ph_setting": {
            "phmin": 7,
            "phmax": 9,
            "phideal": 8.1
        },
        "ec_setting": {
            "ecmin": 1800,
            "ecideal": 2100
        },
        "water_temperature_setting": {
            "tempmax": 23,
            "tempideal": 18
        },
        "supplement_pump_setting": {
            "ec": 60,
            "phinc": 30,
            "phdec": 30,
            "cycle": 40
        }
    }
}


@app.route('/data', methods=["GET"])
def data():
    return sample["data"]
    # return slave.getSlaveData()


@app.route('/notification')
def notify():
    return 'Hello, World!'


@app.route('/warning')
def warn():
    return 'Hello, World!'


@app.route('/lights', methods=["POST"])
def lights():
    data = request.json
    # res = slave.setLightStatus(int(data['light']), int(data['state']))
    # print("Main Light ",slave.lastUserInputTime)
    # return {'result': res}
    print(data)
    return {'result': True}


@app.route('/getsettings', methods=["GET"])
def getsettings():
    return sample["settings"]
    # res = slave.getSettings()
    # return res


@app.route('/settings/<sType>', methods=["POST"])
def settings(sType):
    params = request.json
    print(sType, params)
    # res = slave.setNewSettings(int(sType), params)
    # return res
    # return {'result': res}
    return {'result': True}


@app.route('/maintenance/state/<state>', methods=["POST"])
def maintenanceState(state):
    # res = slave.setMaintenanceState(eval(state))
    return {'result': state}


@app.route('/maintenance/control/<mType>', methods=["POST"])
def maintenance(mType):
    # state = request.json["state"]
    # res = slave.setMaintenanceControl(int(mType), state)
    return {'result': True}


if __name__ == '__main__':
    # slave.start()
    app.run(port=14999, host="0.0.0.0")
