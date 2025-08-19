const router = require('express').Router();
const query = require('../db/query');


const adhocSetting = (req, res) =>{
    let settings = req.body;
    let device_id = settings.device_id;
    // if (sample_device_id.includes(device_id)) {
    // console.log(settings)
    // postgresql.query(query.updateDeviceAdhocStatus(device_id, settings), (err, res) => {
    //     if (err) {
    //         console.log("Error updating alarm notification log", err.stack);
    //         res.status(400).send("Error while updating device adhoc program");
    //     } else {
    //         mqttclient.publish(`server/${device_id}/maintenance`, JSON.stringify(settings));
    //         res.status(200).send("Device Adhoc program accepted");
    //     }
    // });

    mqttclient.publish(`server/${device_id}/maintenance`, JSON.stringify(settings));
    res.status(200).send("Device Adhoc program accepted");
    
            // mqttclient.publish(`server/${device_id}/maintenance`, JSON.stringify(settings));
            // res.status(200).send("Device Adhoc program accepted");
    // }else{
    //     res.status(400).send("Invalid Request Device Id");
    // }
}

router.post("/", adhocSetting)
module.exports = router

/*
device program req body structure:
METHOD : POST - /adhocsettings

Body:
{
    "device_id":<unique_id>,
    "water_pump":<time in mins> / 0 if no action is required,
    "ph_inc_pump":<time in mins> / 0 if no action is required,
    "ph_dec_pump":<time in mins> / 0 if no action is required,
    "ec_pump":<time in mins> / 0 if no action is required,
    "water_temperature_time" : <time in mins> / 0 if no action is required
    "water_temperature": <value>/ 0 water_temperature_time is 0,
    "light_1":<time in mins> / 0 if no action is required,
    "light_2":<time in mins> / 0 if no action is required,
    "light_3":<time in mins> / 0 if no action is required,
    "light_4":<time in mins> / 0 if no action is required,
    "light_5":<time in mins> / 0 if no action is required,
    "light_brightness_time":<time in mins> / 0 if no action is required,
    "light_brightness":<val> / 0 if light_brightnrss_time is 0,
}
*/