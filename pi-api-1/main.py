from flask import Flask, request
from flask_cors import CORS
import constants
from slave_controller import SlaveController
import baselogger, os
import wifimanage as wfm
import subprocess

app = Flask(__name__)
CORS(app)
device_id = constants.getserial()
slave = SlaveController(device_id)
master_version = 1.36

'''sample = {
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
}'''


@app.route('/data', methods=["GET"])
def data():
    # return sample["data"]
    return slave.getSlaveData()


@app.route('/notification')
def notify():
    return 'Hello, World!'


@app.route('/warning')
def warn():
    return 'Hello, World!'


@app.route('/lights', methods=["POST"])
def lights():
    data = request.json
    res = slave.setLightStatus(int(data['light']), int(data['state']))
    return {'result': res}


@app.route('/getsettings', methods=["GET"])
def getsettings():
    res = slave.getSettings()
    return res


@app.route('/settings/<sType>', methods=["POST"])
def settings(sType):
    params = request.json
    print(sType, params)
    res = slave.setNewSettings(int(sType), params)
    # return res
    return {'result': res}
    # return {'result': True}


@app.route('/settings/9/getsensorcalibration/<aType>', methods=["GET"])
def sensorCalibration(aType):
    if int(aType) == 1:
        return {
            'data': [
                {
                    'value': 4,
                    'isShow': True
                },
                {
                    'value': 7,
                    'isShow': True
                },
                {
                    'value': 9,
                    'isShow': False
                },
                {
                    'value': 10,
                    'isShow': False
                },
            ]
        }
    if int(aType) == 2:
        return {
            'data': [
                {
                    'value': 12.88,
                    'isShow': True
                },
                {
                    'value': 700,
                    'isShow': False
                },
                {
                    'value': 1.413,
                    'isShow': True
                },
                {
                    'value': 2000,
                    'isShow': False
                },
            ]
        }


@app.route('/settings/9/getcalibrationresult', methods=["GET"])
def getresultfrommcu():
    res = slave.getcalibResult()
    return {'result': res}
    # return True


@app.route('/settings/9/putnumberofsolutionsdone', methods=["POST"])
def totalNumbersDone():
    params = request.json
    res = slave.putnumberofsolution(params)
    return {'result': res}

@app.route('/maintenance/state/<state>', methods=["POST"])
def maintenanceState(state):
    res = slave.setMaintenanceState(eval(state))
    return {'result': res}


@app.route('/maintenance/control/<mType>', methods=["POST"])
def maintenance(mType):
    state = request.json["state"]
    res = slave.setMaintenanceControl(int(mType), state)
    return {'result': res}


@app.route('/adhoc/start', methods=["POST"])
def adhoc():
    cmMsg = request.json
    res = slave.processAdhoc(cmMsg)
    return {'result': res}


@app.route('/system/restart', methods=["POST"])
def restart():
    res = slave.restartController()
    return {'result': res}


@app.route('/system/reseterror', methods=["POST"])
def reset():
    res = slave.resetError()
    return {'result': res}


@app.route('/system/versioninfo', methods=["GET"])
def version():
    slave_version = slave.getSlaveVersion()
    res = {"slave": slave_version,
           "serial": slave.device_id,
           "master": master_version}
    return res


@app.route('/system/wifinames', methods=["GET"])
def wifinames():
    all = wfm.Search()
    try:
        cur = str(subprocess.check_output(["sudo", "iwgetid"])).split('"')[1]
        res = {'res': all, 'cur': cur}
        return res
    except subprocess.CalledProcessError as e:
        print(e.output)
        res = {'res': all}
        return res


@app.route('/system/connectwifi', methods=["POST"])
def wificonnect():
    try:
        creds = request.json
        print("sudo", "nodewifi.sh", creds["ssid"], creds["pwd"])
        ssid = str(creds["ssid"])
        pwd = str(creds["pwd"])
        # c = subprocess.call(["sudo", "nodewifi.sh", "" + creds["ssid"], "" + creds["pwd"]])
        # c = subprocess.call(["sudo", "nodewifi.sh",  str(creds["ssid"]), str(creds["pwd"])])
        # c = subprocess.call(["sudo", "nodewifi.sh", "" + str(creds["ssid"]), "" + str(creds["pwd"])])
        # c = subprocess.call(["sudo", "nodewifi.sh", "" + str(creds["ssid"]) + "", "" + str(creds["pwd"]) + ""])
        # c = subprocess.call(["sudo", "nodewifi.sh", "’" + str(creds["ssid"]) +”’”, "’" + str(creds["pwd"]) +”’”])
        c = subprocess.call(["sudo", "nodewifi.sh",  "" + ssid + "", "" + pwd + ""])
    except Exception as e:
        return {'res': False}
    return {'res': True}


if __name__ == '__main__':
    slave.start()
    app.run(port=14999, host="0.0.0.0")

