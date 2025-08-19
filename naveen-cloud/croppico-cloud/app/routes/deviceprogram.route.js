const router = require('express').Router();
const query = require('../db/query');

const setDeviceProgram = (req, res) => {
    let settings = req.body;
    let device_id = settings.device_id;
    // if (sample_device_id.includes(device_id)){
        if ("water_pump" in settings && "ph_thresholds" in settings && "ec_thresholds" in settings && "water_temperature" in settings && "supplement_pump" in settings) {
            // console.log("device program ", settings);
            mqttclient.publish(`server/${device_id}/settings`, JSON.stringify(settings));
            console.log(query.updateDeviceProgram(device_id, settings));
            res.status(200).send("Device program accepted");
            // postgresql.query(query.updateDeviceProgram(device_id, settings), (err, result) => {
            //     if (err) {
            //         console.log("Error updating device program log", err.stack);
            //         res.status(400).send("Error while updating device program");
            //     } else {
            //         // console.log("Alarm notification logged")
            //         mqttclient.publish(`server/${device_id}/settings`, JSON.stringify(settings));
            //         res.status(200).send("Device program accepted");
            //     }
            // });
            
        } else {
            res.status(400).send("Invalid Request Missing Parameters");
        }
    // } else {
    //     res.status(400).send("Invalid Request Device Id");
    // }
}

router.post("/", setDeviceProgram)
module.exports = router

/*
device program req body structure:
METHOD : POST - /setdeviceprogram
{
    device_id:<unique_id>,
    timestamp:<epoch timestamp in seconds>,
	water_pump:{
        ontime:<int in minutes>
        offtime:<int in minutes>
    },
    ph_thresholds:{
        phmin:<float>
        phmax:<float>
        phideal:<float>
    },
    ec_thresholds:{
        ecmin:<int>
        ecideal:<int>
    },
    water_temperature:{
        tempmax:<float>,
        tempideal:<float>
    },
    supplement_pump:{
        ec:<int in minutes>,
        phinc:<int in minutes>,
        cycle:<int in minutes>
    }
}
*/