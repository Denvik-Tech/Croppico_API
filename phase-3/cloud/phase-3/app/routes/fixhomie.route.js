const router = require('express').Router();

const fixMyHomie = (req, res) => {
    let device_id = req.body.device_id;
    if (sample_device_id.includes(device_id)) {
        mqttclient.publish(`server/${device_id}/fix`,1);
        console.log("Diagnosis command accepted from mobile application");
        res.status(200).send("Diagnosis command accepted");
    } else {
        console.log("Invalid request from mobile application");
        res.status(400).send("Invalid Request Device Id");
    }
}

router.post("/", fixMyHomie)
module.exports = router


/*
fix my homie req body structure:
METHOD : POST - /fixmyhomie
Body:
{
    device_id:<unique_id>
}
*/