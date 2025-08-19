import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(12,GPIO.OUT)
GPIO.setup(16,GPIO.OUT)

GPIO.output(12,GPIO.HIGH)
time.sleep(2)
GPIO.output(16,GPIO.HIGH)
time.sleep(0.2)
GPIO.output(16,GPIO.LOW)
time.sleep(0.2)
#GPIO.output(20,GPIO.LOW)


#GPIO.output(20,GPIO.LOW)
#GPIO.output(21,GPIO.LOW)
#time.sleep(0.2)
#GPIO.output(21,GPIO.HIGH)
