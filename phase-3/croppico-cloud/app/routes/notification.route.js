const router = require('express').Router();
const query = require('../db/query');


const getNotifications = (req, res) => {
    let device_id = req.query.device_id;
        
    postgresql.query(query.getNotification(device_id), (err, result) => {
        if (err) {
            console.log("Error updating device program log", err.stack);
            res.status(400).send("Error getting notification");
        } else {
            // console.log("Alarm notification logged")
            // mqttclient.publish(`server/${device_id}/settings`, JSON.stringify(settings));
            res.status(200).send({"notification":result.rows});
        }
    });
        // res.status(200).send({
        //     "notification": [{
        //         "priority": 0,
        //         "type": "event",
        //         "message": "Water Pump ON"
        //     }, {
        //         "priority": 1,
        //         "type": "alarm",
        //         "message": "water Level Low"
        //     }, {
        //         "priority": 0,
        //         "type": "event",
        //         "message": "EC pump turned ON"
        //     }, {
        //         "priority": 3,  
        //         "type": "alarm",
        //         "message": "EC Level Low"
        //     }, {
        //         "priority": 2,
        //         "type": "alarm",
        //         "message": "Water Flow Low"
        //     }]
        // });
}

router.get("/", getNotifications)
module.exports = router

/*
get notification req body structure:
METHOD : GET - /getnotifications
PARAM : device_id,

Response body : ?? Please fill in the format required for the app
*/