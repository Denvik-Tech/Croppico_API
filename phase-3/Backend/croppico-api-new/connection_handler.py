import requests
import time, json
import paho.mqtt.client as mqtt
import baselogger
from constants import Peripherals

logToFile = False


class ConnectionHandler:
    def __init__(self, device_id):
        self.client = mqtt.Client()
        self.device_id = device_id
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message
        if logToFile:
            self.logger = baselogger.get_logger('Connection Handler')
            self.logger.info("Initiated")
        self.connect()

    def re_init_logger(self):
        if logToFile:
            self.logger.removeHandler(self.logger.handlers[0])
            self.logger = baselogger.get_logger('Connection Handler')

    def on_connect(self, client, userdata, flags, rc):
        if logToFile: self.logger.info("Connected with MQTT broker")
        if rc == 0:
            self.client.connected_flag = True  # set flag
            print("Connected OK")
            self.client.subscribe("server/" + self.device_id + "/#")

    def on_message(self, client, userdata, msg):
        if logToFile: self.logger.info("Received payload %s" % msg)
        return msg

    def publish(self, dtype, data):
        try:
            if logToFile: self.logger.info("Publishing %s %s" % (dtype, data))
            self.client.publish(topic="croppico/" + self.device_id + "/" + dtype, payload=data)
        except:
            pass

    def connect(self):
        try:
            self.client.username_pw_set(username="homie", password="a'M5xu+N3RJ*_#")
            #            self.client.connect_async("ec2-65-0-156-233.ap-south-1.compute.amazonaws.com", 1883, 60)
            self.client.connect_async("ec2-13-234-159-78.ap-south-1.compute.amazonaws.com", 1883, 60)
            self.client.publish(topic="croppico/" + self.device_id + "/connection",
                                payload=json.dumps({"time": int(time.time())}))
            self.client.subscribe("server/" + self.device_id + "/#")
            self.client.loop_start()
        except:
            time.sleep(5)
            self.connect()

