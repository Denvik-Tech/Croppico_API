const mqtt = require('mqtt');
const dbController = require('./db/dbController');
const notificationRef = require('./config/notification.ref');

global.mqttclient = mqtt.connect(process.env.MQTT_CONNECTION, {
    username: process.env.MQTT_UNAME,
    password: process.env.MQTT_UPASS
});

const sourceType = {
    GATEWAY: "croppico",
    SERVER: "server"
}

const deviceMsgType = {
    DATA: "data",
    SETTING: "setting",
    USEREVENT: "userevent",
    EVENT: "event",
    ALARM: "alarm",
    ERROR: "error",
    ACK: "ack"
}

const serverMsgType = {
    STAT: "stat",
    DOWNLINK: "downlink"
}

mqttclient.on('connect', function () {
    console.log("Connected to broker...");
    mqttclient.publish("server/stat", "connected")
    mqttclient.subscribe(`${sourceType.GATEWAY}/#`);
});

mqttclient.on('disconnect', function () {
    console.log("Disconnected from broker...");
    mqttclient.reconnect();
});

mqttclient.on('message', function (topic, message) {
    console.log(`TOPIC ${topic},MESSAGE ${message}`);
    // message is Buffer
    try {
        topic = topic.split("/");
        let source = topic[0];
        if (source == sourceType.GATEWAY) {
            let device_id = topic[1];
            let msgType = topic[2];
            let msgData = JSON.parse(message.toString());
            //console.log(msgType, msgData);
            switch (msgType) {
                case deviceMsgType.DATA:
                    try { 
                        console.log(dbController.query.insertDataToDataLog(device_id, msgData));
                        postgresql.query(dbController.query.insertDataToDataLog(device_id, msgData), (err, res) => {
                            if (err) {
                                console.log("Error updating data log", err.stack);
                            } else {
                                // console.log("Data logged")
                            }
                        })
                    } catch (e) {
                        console.log("Error in data store ", dbController.query.updateDataToRecentData(device_id, msgData));
                    }
                    break;
                case deviceMsgType.SETTING:
                    //save setting to setting table & log the change.
                    break;
                case deviceMsgType.ACK:
                    //set the sent flag in the downlink message.
                    break;
                case deviceMsgType.EVENT:
                    //set the sent.
                    break;
                case deviceMsgType.ALARM:
                    console.log(msgData);
                    if (Object.keys(msgData).length > 1) {
                        try {
                            console.log(dbController.query.insertToAlarmLog(device_id, msgData));
                            postgresql.query(dbController.query.insertToAlarmLog(device_id, msgData), (err, res) => {
                                if (err) {
                                    console.log("Error updating alarm log", err.stack);
                                } else {
                                    // console.log("Alarm logged")
                                }
                            });
                            // Adding deveice id
                            msgData.device_id = device_id;
                        } catch (e) {
                            console.log("Error in alarm ", e);
                        }
                    }
                    break;
                default:
                    console.error("Unknown data type...")
                    break;
            }

        }
    } catch (exception) {
        console.log("Error in parsing mqtt message", exception)
    }
})

const sendDownlinkData = (device_id, payload) => {
    let topic = `server/${serverMsgType.DOWNLINK}/${device_id}`;
    mqttclient.publish(topic, JSON.stringify(payload));
}

module.exports = {
    sendDownlinkData: sendDownlinkData
}