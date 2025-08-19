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
                    //save data to data table
                    console.log(dbController.query.updateDataToRecentData(device_id, msgData));
                    try {
                        postgresql.query(dbController.query.updateDataToRecentData(device_id, msgData), (err, res) => {
                            if (err) {
                                console.log("Error updating recent data", err.stack);
                            } else {
                                // console.log("Data updated")
                            }
                        })
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
                            console.log("Skipped the notification tasks!!!");
                            /*
                            let notifiationDets = notificationRef.getNotificationMsg(msgData);
                            let notifiationMsg = notifiationDets.notification;
                            let nonnotificationMsg = notifiationDets.nonnotification;
                            for (let nonnotification of nonnotificationMsg) {
                                // console.log(dbController.query.getUnsetNotification(device_id, nonnotification));
                                postgresql.query(dbController.query.getUnsetNotification(device_id, nonnotification), (err, res) => {
                                    if (err) {
                                        console.log("Error in retrieving past notifications", err.stack);
                                    } else {
                                        if (res.rows.length > 0) {
                                            console.log("Resolving")
                                            let data = res.rows[0];
                                            console.log(data);
                                            postgresql.query(dbController.query.resolveNotification(device_id, nonnotification, data.created_timestamp), (err, res) => {
                                                if (err) {
                                                    console.log("Error in resetting notification", err.stack);
                                                } else {
                                                    console.log("Notification reset successful")
                                                }
                                            })
                                        }
                                    }
                                });
                            }
                            for (let notification of notifiationMsg) {
                                // console.log(notification)
                                // console.log(dbController.query.insertToNotificationLog(device_id, notification));
                                // console.log(">>", dbController.query.getUnsetNotification(device_id, notification.message))
                                postgresql.query(dbController.query.getUnsetNotification(device_id, notification.peripheral), (err, res) => {
                                    if (err) {
                                        console.log("Error in retrieving past notifications", err.stack);
                                    } else {
                                        // console.log(res.rows)
                                        if (res.rows.length > 0) {
                                            console.log("Alarm already existing")
                                        } else {
                                            console.log(notification, dbController.query.insertToNotificationLog(device_id, notification));
                                            postgresql.query(dbController.query.insertToNotificationLog(device_id, notification), (err, res) => {
                                                if (err) {
                                                    console.log("Error updating alarm notification log", err.stack);
                                                } else {
                                                    console.log("Alarm notification logged")
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                            */
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