from flask import Flask, request
from flask_cors import CORS
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(4, GPIO.OUT)
import subprocess
import os
import time
import shlex
import paramiko

app = Flask(__name__)
CORS(app)

sftpURL = '15.206.30.199'
sftpUser = 'denvik-sftp'
sftpPass = '@&9amPTBX@fDfCwk7I'
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(sftpURL, username=sftpUser, password=sftpPass)




def updateUI():
    ftp = ssh.open_sftp()
    # files = ftp.listdir("/denvik-sftp")
    api_remote_dir = '/sftproot/a_0_0_0.zip'
    api_local_dir = '/home/pi/ftp/getfiles/a_0_0_0.zip'
    download_api_files = ftp.get(api_remote_dir, api_local_dir)
    print("downloaded api zip file from sftp")
    ui_remote_dir = '/sftproot/u_0_0_0.zip'
    ui_local_dir = '/home/pi/ftp/getfiles/u_0_0_0.zip'
    download_ui_files = ftp.get(ui_remote_dir, ui_local_dir)
    print("downloaded ui zip file from sftp successfull")
    # remove_zip = subprocess.call(["rm", "-r", "/home/pi/ftp/getfiles/*"])
    #get zip from cloud
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
    print("restarting service")
    restart_service_arg = ("systemctl", "restart", "cropicco-api.service")
    start = subprocess.call('%s %s %s' % restart_service_arg, shell=True)
    print("rebooting system")
    reboot_arg = ("sudo", "reboot", "now")
    reboot = subprocess.call('%s %s %s' % reboot_arg, shell=True)
    return

@app.route('/system/update', methods=["POST"])
def update():
    state = request.json["update"]
    # logger.info('gitpull' + str(state))
    print("state from api", state)
    # firstgitpull = subprocess.call() #update ui directory
    # secondgitpull = subprocess.call() #update api directory
    # runbash = subprocess.call() #bash will be used as backdoor
    print("entering main execution loop")
    updateUI()
    return {'result': state}


if __name__ == '__main__':
    app.run(port=15999, host="0.0.0.0")



