from flask import Flask, request
from flask_cors import CORS
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(26, GPIO.OUT)
import subprocess
import os
import time
import shlex
import paramiko

app = Flask(__name__)
CORS(app)

flash_count = 0
eeprom_count = 0
max_retry_count = 5

sftpURL = '15.206.30.199'
sftpUser = 'denvik-sftp'
sftpPass = '@&9amPTBX@fDfCwk7I'
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(sftpURL, username=sftpUser, password=sftpPass)


def updateRasp():
    ftp = ssh.open_sftp()
    api_remote_dir = '/sftproot/a_0_0_0.zip'
    api_local_dir = '/home/pi/ftp/getfiles/a_0_0_0.zip'
    download_api_files = ftp.get(api_remote_dir, api_local_dir)
    print("downloaded api zip file from sftp")

    ui_remote_dir = '/sftproot/u_0_0_0.zip'
    ui_local_dir = '/home/pi/ftp/getfiles/u_0_0_0.zip'
    download_ui_files = ftp.get(ui_remote_dir, ui_local_dir)
    print("downloaded ui zip file from sftp successfully")

    flash_remote_dir = '/sftproot/flash.hex'
    flash_local_dir = '/home/pi/ftp/getfiles/flash.hex'
    download_flash = ftp.get(flash_remote_dir, flash_local_dir)
    print("downloaded flash hex file from sftp successfully")

    eeprom_remote_dir = '/sftproot/flash.hex'
    eeprom_local_dir = '/home/pi/ftp/getfiles/flash.hex'
    download_eeprom = ftp.get(eeprom_remote_dir, eeprom_local_dir)
    print("downloaded eeprom eep file from sftp successfully")

    print("removing api folder from backup files")
    remove_arg_1 = ("rm", "-r", "/home/pi/ftp/backup/a_0_0_0/*")
    remove_backup = subprocess.call('%s %s %s' % remove_arg_1, shell=True)
    print("copying api files to backup folder")
    copy_arg_1 = ("cp", "-R", "/home/pi/croppico-api-new/*", "-d", "/home/pi/ftp/backup/a_0_0_0/")
    copy_backup = subprocess.call('%s %s %s %s %s' % copy_arg_1, shell=True)

    print("removing ui folder from backup files")
    remove_arg_2 = ("rm", "-r", "/home/pi/ftp/backup/u_0_0_0/*")
    remove_backup = subprocess.call('%s %s %s' % remove_arg_2, shell=True)
    print("copying ui files to backup folder")
    copy_arg_2 = ("cp", "-R", "/var/www/html/*", "-d", "/home/pi/ftp/backup/u_0_0_0/")
    copy_backup = subprocess.call('%s %s %s %s %s' % copy_arg_2, shell=True)
    print("backup process done")

    print("initiating unzip process")
    print("removing api files from newupdates folder")
    remove_update_arg1 = ("rm", "-r", "/home/pi/ftp/newupdates/a_0_0_0/*")
    remove_newupdates = subprocess.call('%s %s %s' % remove_update_arg1, shell=True)
    print("unzipping the api files into newupdates folder")
    unzip_api_arg = ("unzip", "-o", "/home/pi/ftp/getfiles/a_0_0_0.zip", "-d", "/home/pi/ftp/newupdates/a_0_0_0/")
    unzip_api = subprocess.call('%s %s %s %s %s' % unzip_api_arg, shell=True)

    print("removing ui files from newupdates folder")
    remove_update_arg2 = ("rm", "-r", "/home/pi/ftp/newupdates/u_0_0_0/*")
    remove_newupdates = subprocess.call('%s %s %s' % remove_update_arg2, shell=True)
    print("unzipping the ui files into newupdates folder")
    unzip_ui_arg = ("unzip", "-o", "/home/pi/ftp/getfiles/u_0_0_0.zip", "-d", "/home/pi/ftp/newupdates/u_0_0_0/")
    unzip_ui = subprocess.call('%s %s %s %s %s' % unzip_ui_arg, shell=True)
    print("unzipping done")

    print("updating working directory")
    print("removing api from working directory")
    remove_running_api_arg = ("rm", "-r", "/home/pi/croppico-api-new/*")
    remove_running_api = subprocess.call('%s %s %s' % remove_running_api_arg, shell=True)
    print("copying api to working directory")
    copy_newupdates_api_arg = ("cp", "-R", "/home/pi/ftp/newupdates/a_0_0_0/*", "-d", "/home/pi/croppico-api-new/")
    copy_newupdates_api = subprocess.call('%s %s %s %s %s' % copy_newupdates_api_arg, shell=True)

    print("removing ui files from working directory")
    remove_running_ui_arg = ("rm", "-r", "/var/www/html/*")
    remove_running_ui = subprocess.call('%s %s %s' % remove_running_ui_arg, shell=True)
    print("copying ui files to working directory")
    copy_newupdates_ui_arg = ("cp", "-R", "/home/pi/ftp/newupdates/u_0_0_0/*", "-d", "/var/www/html/")
    copy_newupdates_ui = subprocess.call('%s %s %s %s %s' % copy_newupdates_ui_arg, shell=True)

    mcu_flash_programming()

    print("rebooting system")
    reboot_arg = ("sudo", "reboot", "now")
    reboot = subprocess.call('%s %s %s' % reboot_arg, shell=True)
    return


def mcu_flash_programming():
    global flash_count
    flash_count += 1
    print("Flashing FLASH initiated")
    GPIO.output(26, 1)
    time.sleep(0.5)
    GPIO.output(26, 0)
    time.sleep(0.5)
    if flash_count < max_retry_count:
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
            flash_count = 0
            time.sleep(2)
            mcu_eeprom_programming()
        except subprocess.CalledProcessError as e:
            print("restarting service")
            restart_service_arg = ("systemctl", "restart", "cropicco-api.service")
            start = subprocess.call('%s %s %s' % restart_service_arg, shell=True)
            print("retrying Flash programming...")
            time.sleep(1)
            mcu_flash_programming()
    else:
        print("count reached")


def mcu_eeprom_programming():
    print("Flashing EEPROM initiated")
    global eeprom_count
    eeprom_count += 1
    GPIO.output(26, 1)
    time.sleep(0.5)
    GPIO.output(26, 0)
    time.sleep(0.5)
    if eeprom_count < max_retry_count:
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
            mcu_eeprom_programming()
    else:
        print("OVER THE AIR UPDATE SUCCESSFULL")

@app.route('/system/update', methods=["POST"])
def update():
    state = request.json["update"]
    print("state from api", state)
    print("entering main execution loop")
    updateRasp()
    return {'result': state}


if __name__ == '__main__':
    app.run(port=15999, host="0.0.0.0")
