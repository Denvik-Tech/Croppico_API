import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(26, GPIO.OUT)
import subprocess
import os
import time
import shlex
import paramiko

count = 0

sftpURL = '15.206.30.199'
sftpUser = 'denvik-sftp'
sftpPass = '@&9amPTBX@fDfCwk7I'
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(sftpURL, username=sftpUser, password=sftpPass)


def download_eeprom():
    ftp = ssh.open_sftp()
    eeprom_remote_dir = '/sftproot/eeprom.eep'
    eeprom_local_dir = '/home/pi/ftp/getfiles/eeprom.eep'
    download_eeprom = ftp.get(eeprom_remote_dir, eeprom_local_dir)
    print("downloaded eeprom eep file from sftp successfully")
    mcu_programming()


def mcu_programming():
    global count
    count += 1
    print("Flashing initiated")
    GPIO.output(26, 1)
    time.sleep(0.5)
    GPIO.output(26, 0)
    time.sleep(0.5)
    if count < 3:
        try:
            stop_arg = ("systemctl", "stop", "cropicco-api.service")
            stop = subprocess.call('%s %s %s' % stop_arg, shell=True)
            eeprom_arg = (
                "avrdude", "-v", "-p", "ATmega4809", "-c", "arduino", "-P", "/dev/ttyUSB0", "-b", "115200", "-D", "-U",
                "eeprom:w:/home/pi/ftp/getfiles/eeprom.eep:i")
            eeprom = subprocess.check_output('%s %s %s %s %s %s %s %s %s %s %s %s %s' % eeprom_arg, shell=True)
            print("restarting service")
            restart_service_arg = ("systemctl", "restart", "cropicco-api.service")
            start = subprocess.call('%s %s %s' % restart_service_arg, shell=True)
            count = 0
        except subprocess.CalledProcessError as e:
            print("restarting service")
            restart_service_arg = ("systemctl", "restart", "cropicco-api.service")
            start = subprocess.call('%s %s %s' % restart_service_arg, shell=True)
            print("retrying...")
            time.sleep(1)
            mcu_programming()
    else:
        print("count reached")


if __name__ == '__main__':
    download_eeprom()
