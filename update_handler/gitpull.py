from flask import Flask, request
from flask_cors import CORS
#import baselogger
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.OUT)
import subprocess
import os
import time
import shlex

gitpull = Flask(__name__)
CORS(gitpull)

#logger = baselogger.get_logger('Slave Controller')
#logger.info("Initiated...")

@gitpull.route('/system/update', methods=["POST"])
def maintenance():
    state = request.json["update"]
    #logger.info('gitpull' + str(state))
    print("state from api", state)
    #return {'result': state}
    # firstgitpull = subprocess.call() #update ui directory
    # secondgitpull = subprocess.call() #update api directory
    # runbash = subprocess.call() #bash will be used as backdoor
    #stop = subprocess.call(["systemctl", "stop", "cropicco-api.service"])
    print("Flashing initiated")
    GPIO.output(4, 1)
    time.sleep(0.5)
    GPIO.output(4, 0)
    time.sleep(0.5)
    stop = subprocess.call(["systemctl", "stop", "cropicco-api.service"])
    #GPIO.cleanup()
    flash = subprocess.call(
        ["avrdude", "-v", "-p", "ATmega4809", "-c", "arduino", "-P", "/dev/ttyUSB0", "-b", "115200", "-D", "-U",
         "flash:w:/home/pi/flash5.hex:i"]) 
    #return {'result': state}
    start = subprocess.call(["systemctl", "restart", "cropicco-api.service"])
    print("system restarted")


if __name__ == '__main__':
    gitpull.run(port=15999, host="0.0.0.0")
