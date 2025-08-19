import RPi.GPIO as GPIO
import time,subprocess
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(20,GPIO.OUT)
GPIO.setup(21,GPIO.OUT)

print("into bootloader")
GPIO.output(20,GPIO.HIGH)
time.sleep(2)
GPIO.output(21,GPIO.HIGH)
time.sleep(0.2)
GPIO.output(21,GPIO.LOW)
time.sleep(0.2)


#GPIO.output(20,GPIO.HIGH)
#time.sleep(2)
#GPIO.output(21,GPIO.HIGH)

#time.sleep(0.2)
#GPIO.output(21,GPIO.LOW)
#time.sleep(0.2)
#GPIO.output(20,GPIO.LOW)

print("programming")
# intoDir_Arg = ("cd", "/home/pi/stm-bootloader/git/stm32flash/")
# intoDir = subprocess.call('%s %s' % intoDir_Arg, shell=True)
# flash_arg = ("./stm32flash", "-b", "115200", "-v", "-w", "/home/pi/stm-bootloader/4.bin/dev/ttyUSB0")
flash_arg = ("/home/pi/stm-bootloader/git/stm32flash/stm32flash", "-b", "115200", "-v", "-w",
             "/home/pi/stm-bootloader/latest_firmware/firmware.bin", "/dev/ttyUSB0")
flash = subprocess.call('%s %s %s %s %s %s %s' % flash_arg, shell=True)
time.sleep(5)
print("releasing bootloader")

GPIO.output(20,GPIO.LOW)
GPIO.output(21,GPIO.HIGH)
time.sleep(0.2)
GPIO.output(21,GPIO.LOW)
