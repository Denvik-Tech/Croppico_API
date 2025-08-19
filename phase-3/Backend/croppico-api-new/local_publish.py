import time, json
import paho.mqtt.client as mqtt


class Publish:
    def __init__(self):
        self.client = mqtt.Client()
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message
        self.connect()

    def on_connect(self, client, userdata, flags, rc):
        if rc == 0:
            self.client.connected_flag = True
            print("Connected locally")

    def publish(self, topic, data):
        try:
            print("entering mqtt")
            self.client.publish(topic=topic, payload=json.dumps(data))
            print("[ PUBLISHING THROUGH MQTT ]", data)
        except:
            pass

    @staticmethod
    def on_message(client, userdata, message):
        print("Message received-> "
              + message.topic + " " + str(message.payload))

    def connect(self):
        try:
            self.client.username_pw_set(username="Denvik", password="PvhMtj1QlGgQ1w2")
            self.client.connect_async("mqtt.denvik.in", 1883, 60)
            self.client.loop_start()
        except:
            time.sleep(5)
            self.connect()
