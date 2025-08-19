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

mqttclient.on('message',async function (topic, message) {
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
                    //console.log(dbController.query.updateDataToRecentData(device_id, msgData));
                    try {
                        postgresql.query(dbController.query.updateDataToRecentData(device_id, msgData), (err, res) => {
                            if (err) {
                                console.log("Error updating recent data", err.stack);
                            } else {
                                // console.log("Data updated")
                            }
                        })
                        // console.log(dbController.query.insertDataToDataLog(device_id, msgData));
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
                            let notifiationDets = notificationRef.getNotificationMsg(msgData);
                            let notifiationMsg = notifiationDets.notification;
                            let nonnotificationMsg = notifiationDets.nonnotification;
                            console.log('total exection length 1 ============>',nonnotificationMsg.length);
                            let startTime, endTime;

                            // Measure execution time for the first loop
                            startTime = Date.now();
                            let i=0
                            for (let nonnotification of nonnotificationMsg) {
                                i++
                                let start=Date.now()
                                try {
                                    let res= await postgresql.query(dbController.query.getUnsetNotification(device_id, nonnotification));
                                    console.log(res);
                                    let end=Date.now()
                                    console.log("Execution time getUnsetNotification",i,"-------",start-end);
                                    console.log();
                                    if (res.rows.length > 0) {
                                     console.log("Resolving")
                                     let data = res.rows[0];
                                     console.log(data);
                                     start=Date.now()
                                     await postgresql.query(dbController.query.resolveNotification(device_id, nonnotification, data.created_timestamp));
                                     end=Date.now()
                                     console.log("Execution time resolveNotification",i,"-------",start-end);

                                 }
                                } catch (error) {
                                    console.log('Error ********************** 1',error);
                                }
                       
                            }
                            endTime = Date.now();
                            console.log('Non-Notification Loop Execution Time:', endTime - startTime, 'ms');
                            
                            // Measure execution time for the second loop
                            console.log('Total execution length 2 ============>', notifiationMsg.length);
                            
                            startTime = Date.now();
                            i=0
                            for (let notification of notifiationMsg) {
                                try {
                                    let start=Date.now();
                                    let res= await postgresql.query(dbController.query.getUnsetNotification(device_id, notification.peripheral))
                                    let end= Date.now()
                                    console.log("Execution time getUnsetNotification",i,"-------",start-end);

                                    if (res.rows.length > 0) {
                                     console.log("Alarm already existing")
                                 } else {
                                    start=Date.now()
                                     await postgresql.query(dbController.query.insertToNotificationLog(device_id, notification));
                                     end=Date.now()
                                     console.log("Execution time insertToNotificationLog",i,"-------",start-end);

                                 }
                                } catch (error) {
                                    console.log('Error ********************** 2',error);

                                }
                        
                            }
                            endTime = Date.now();
                            console.log('Notification Loop Execution Time:', endTime - startTime, 'ms');
                            
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