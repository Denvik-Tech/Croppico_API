import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(20,GPIO.OUT)
GPIO.setup(21,GPIO.OUT)

GPIO.output(20,GPIO.LOW)
time.sleep(2)
GPIO.output(21,GPIO.HIGH)
time.sleep(0.2)
GPIO.output(21,GPIO.LOW)
