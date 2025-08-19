const dbController = require('../db/dbController');

let peripherals = {
    WATER_PUMP: "water_pump",
    WATER_FLOW: "water_flow_sensor",
    WATER_CHILLER: "water_chiller",
    WATER_TEMPERATURE_SENSOR: "water_temperature_sensor",
    AMBIENT_SENSOR: "ambient_sensor",
    PH_SENSOR: "ph_sensor",
    EC_SENSOR: "ec_sensor",
    EC_PUMP: "supp_ec_pump",
    PH_INC_PUMP: "supp_ph_inc_pump",
    PH_DEC_PUMP: "supp_ph_dec_pump",
    PH_INC_LEVEL: "supp_ph_inc",
    PH_DEC_LEVEL: "supp_ph_dec",
    EC_A_LEVEL: "supp_ec_a",
    EC_B_LEVEL: "supp_ec_b",
    TRANSPIRATION_ERROR: "transpiration_error"
}

module.exports = {
    types: {
        ALARM: "alarm",
        EVENT: "event",
    },
    getNotificationMsg: (alarmData) => {
        var notifications = [];
        var nonnotifications = [];
        let timestamp = alarmData.timestamp;
        let device_id = alarmData.device_id;
        delete alarmData.timestamp;
        delete alarmData.device_id;
        //console.log(alarmData);
        for (const peripheral in alarmData) {
            //console.log(peripheral, alarmData[peripheral])
            var notifyjson = {}
            let msg = "";
            let nonNotifyPeripherals = ""
            if (alarmData[peripheral] == '1' || alarmData[peripheral] == '2') {
                console.log("Notificatoin peripheral : ", peripheral);
                if (peripheral == peripherals.WATER_PUMP) {
                    msg = "Your water pump or flow sensor is faulty, please check manual.";
                    notifyjson["peripheral"] = peripherals.WATER_PUMP;
                }
                // if (peripheral == peripherals.WATER_FLOW) {
                //             msg = "Your water pump or flow sensor is faulty, please check manual.";
                //             notifyjson["peripheral"] = peripherals.WATER_FLOW;
                //         }

                if (peripheral == peripherals.WATER_FLOW) {
                    const unsetData = postgresql.query(dbController.query.resetUnsetNotification(device_id, peripheral));
                    console.log(`RESET WATER FLOW ISOPEN TO 0 FOR DEVICE${device_id}`);
                    if (alarmData[peripheral] == '1') {
                        msg = "Water flow is low, Please check whether the pipe is clogged.";
                        notifyjson["peripheral"] = peripherals.WATER_FLOW;

                    }
                    if (alarmData[peripheral] == '2') {
                        msg = "Your water pump or flow sensor is faulty, please check manual.";
                        notifyjson["peripheral"] = peripherals.WATER_FLOW;

                    }

                }
                if (peripheral == peripherals.WATER_CHILLER) {
                    msg = "Your water chiller is faulty, please contact service to fix chiller.";
                    notifyjson["peripheral"] = peripherals.WATER_CHILLER;
                }
                if (peripheral == peripherals.WATER_TEMPERATURE_SENSOR) {
                    msg = "Your water temperature sensor is faulty, please contact service.";
                    notifyjson["peripheral"] = peripherals.WATER_TEMPERATURE_SENSOR;
                }
                if (peripheral == peripherals.AMBIENT_SENSOR) {
                    msg = "Your ambient sensor is faulty, please contact service.";
                    notifyjson["peripheral"] = peripherals.AMBIENT_SENSOR;
                }
                if (peripheral == peripherals.PH_SENSOR) {
                    msg = "Your pH sensor is faulty, please contact service.";
                    notifyjson["peripheral"] = peripherals.PH_SENSOR;
                }
                if (peripheral == peripherals.EC_SENSOR) {
                    msg = "Your EC sensor is faulty, please contact service.";
                    notifyjson["peripheral"] = peripherals.EC_SENSOR;
                }
                if (peripheral == peripherals.EC_PUMP) {
                    msg = "Your EC dose pump is faulty, please contact service.";
                    notifyjson["peripheral"] = peripherals.EC_PUMP;
                }
                if (peripheral == peripherals.PH_INC_PUMP) {
                    msg = "Your pH increase dose pump is faulty, please contact service.";
                    notifyjson["peripheral"] = peripherals.PH_INC_PUMP;
                }
                if (peripheral == peripherals.PH_DEC_PUMP) {
                    msg += "Your pH decrease dose pump is faulty, please contact service.";
                    notifyjson["peripheral"] = peripherals.PH_DEC_PUMP;
                }
                if (peripheral == peripherals.PH_INC_LEVEL) {
                    msg += "Your pH increase solution level is Low, please fill the container.";
                    notifyjson["peripheral"] = peripherals.PH_INC_LEVEL;
                }
                if (peripheral == peripherals.PH_DEC_LEVEL) {
                    msg += "Your pH decrease solution level is Low, please fill the container.";
                    notifyjson["peripheral"] = peripherals.PH_DEC_LEVEL;
                }
                if (peripheral == peripherals.EC_A_LEVEL) {
                    msg += "Your EC A solution level is Low, please fill the container.";
                    notifyjson["peripheral"] = peripherals.EC_A_LEVEL;
                }
                if (peripheral == peripherals.EC_B_LEVEL) {
                    msg += "Your EC B solution level is Low, please fill the container.";
                    notifyjson["peripheral"] = peripherals.EC_B_LEVEL;
                }
                if (peripheral == peripherals.TRANSPIRATION_ERROR) {
                    msg += "Transpiration high, Please top up water to 40 litre column.";
                    notifyjson["peripheral"] = peripherals.TRANSPIRATION_ERROR;
                }
                // switch (peripheral) {
                //     case peripherals.WATER_PUMP:
                //         msg = "Your water pump or flow sensor is faulty, please check manual.";
                //         notifyjson["peripheral"] = peripheral.WATER_PUMP;
                //         break;
                //     case peripherals.WATER_CHILLER:
                //         msg = "Your water chiller is faulty, please contact service to fix chiller.";
                //         notifyjson["peripheral"] = peripheral.WATER_CHILLER;
                //         break;
                //     case peripherals.WATER_TEMPERATURE_SENSOR:
                //         msg = "Your water temperature sensor is faulty, please contact service.";
                //         notifyjson["peripheral"] = peripheral.WATER_TEMPERATURE_SENSOR;
                //         break;
                //     case peripherals.AMBIENT_SENSOR:
                //         msg = "Your ambient sensor is faulty, please contact service.";
                //         notifyjson["peripheral"] = peripheral.AMBIENT_SENSOR;
                //         break;
                //     case peripherals.PH_SENSOR:
                //         msg = "Your water pH sensor is faulty, please contact service.";
                //         notifyjson["peripheral"] = peripheral.PH_SENSOR;
                //         break;
                //     case peripherals.EC_SENSOR:
                //         msg = "Your water EC sensor is faulty, please contact service.";
                //         notifyjson["peripheral"] = peripheral.EC_SENSOR;
                //         break;
                //     case peripherals.EC_PUMP:
                //         msg = "Your EC dose pump is faulty, please contact service.";
                //         notifyjson["peripheral"] = peripheral.EC_PUMP;
                //         break;
                //     case peripherals.PH_INC_PUMP:
                //         msg = "Your pH increase dose pump is faulty, please contact service.";
                //         notifyjson["peripheral"] = peripheral.PH_INC_PUMP;
                //         break;
                //     case peripherals.PH_DEC_PUMP:
                //         msg += "Your pH decrease dose pump is faulty, please contact service.";
                //         notifyjson["peripheral"] = peripheral.PH_DEC_PUMP;
                //         break;
                //     case peripheral.PH_INC_LEVEL:
                //         msg += "Your pH increase dose level is Low, please check manual.";
                //         notifyjson["peripheral"] = peripheral.PH_INC_LEVEL;
                //         break;
                //     case peripheral.PH_DEC_LEVEL:
                //         msg += "Your pH decrease dose level is Low, please check manual.";
                //         notifyjson["peripheral"] = peripheral.PH_DEC_LEVEL;
                //         break;
                //     case peripheral.EC_A_LEVEL:
                //         msg += "Your EC A dose level is Low, please check manual.";
                //         notifyjson["peripheral"] = peripheral.EC_A_LEVEL;
                //         break;
                //     case peripheral.EC_B_LEVEL:
                //         msg += "Your EC B dose level is Low, please check manual.";
                //         notifyjson["peripheral"] = peripheral.EC_B_LEVEL;
                //         break;
                //     default:
                //         console.log("Unknown peripheral in notification message construction");
                //         break;
                // }
                notifyjson["priority"] = 1;
                notifyjson["type"] = "alarm";
                notifyjson["message"] = msg;
                notifyjson["timestamp"] = timestamp;
                notifications.push(notifyjson)
            } else {
                switch (peripheral) {
                    case peripherals.WATER_PUMP:
                        nonNotifyPeripherals = peripherals.WATER_PUMP;
                        break;
                    case peripherals.WATER_FLOW:
                        nonNotifyPeripherals = peripherals.WATER_FLOW;
                        break;
                    case peripherals.WATER_CHILLER:
                        nonNotifyPeripherals = peripherals.WATER_CHILLER;
                        break;
                    case peripherals.WATER_TEMPERATURE_SENSOR:
                        nonNotifyPeripherals = peripherals.WATER_TEMPERATURE_SENSOR;;
                        break;
                    case peripherals.AMBIENT_SENSOR:
                        nonNotifyPeripherals = peripherals.AMBIENT_SENSOR;
                        break;
                    case peripherals.PH_SENSOR:
                        nonNotifyPeripherals = peripherals.PH_SENSOR;
                        break;
                    case peripherals.EC_SENSOR:
                        nonNotifyPeripherals = peripherals.EC_SENSOR;
                        break;
                    case peripherals.EC_PUMP:
                        nonNotifyPeripherals = peripherals.EC_PUMP;
                        break;
                    case peripherals.PH_INC_PUMP:
                        nonNotifyPeripherals = peripherals.PH_INC_PUMP;
                        break;
                    case peripherals.PH_DEC_PUMP:
                        nonNotifyPeripherals = peripherals.PH_DEC_PUMP;
                        break;
                    case peripherals.PH_INC_LEVEL:
                        nonNotifyPeripherals = peripherals.PH_INC_LEVEL
                        break;
                    case peripherals.PH_DEC_LEVEL:
                        nonNotifyPeripherals = peripherals.PH_DEC_LEVEL
                        break;
                    case peripherals.EC_A_LEVEL:
                        nonNotifyPeripherals = peripherals.EC_A_LEVEL
                        break;
                    case peripherals.EC_B_LEVEL:
                        nonNotifyPeripherals = peripherals.EC_B_LEVEL
                        break;
                    case peripherals.TRANSPIRATION_ERROR:
                        nonNotifyPeripherals = peripherals.TRANSPIRATION_ERROR
                        break;
                    default:
                        console.log("Unknown peripheral in non notification message construction", peripheral)
                        break;
                }
                nonnotifications.push(nonNotifyPeripherals)
            }
        }
        return {
            'notification': notifications,
            'nonnotification': nonnotifications
        };
    }
};