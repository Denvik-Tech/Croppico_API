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


def download_flash():
    ftp = ssh.open_sftp()
    flash_remote_dir = '/sftproot/flash.hex'
    flash_local_dir = '/home/pi/ftp/getfiles/flash.hex'
    download_flash = ftp.get(flash_remote_dir, flash_local_dir)
    print("downloaded flash hex file from sftp successfully")
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
            flash_arg = (
                "avrdude", "-v", "-p", "ATmega4809", "-c", "arduino", "-P", "/dev/ttyUSB0", "-b", "115200", "-D", "-U",
                "flash:w:/home/pi/ftp/getfiles/flash.hex:i")
            flash = subprocess.check_output('%s %s %s %s %s %s %s %s %s %s %s %s %s' % flash_arg, shell=True)
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
    download_flash()
