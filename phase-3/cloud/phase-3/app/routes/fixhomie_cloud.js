const router = require('express').Router();

const fixMyHomie = (req, res) => {
    let payload = req.body
    let device_id = req.body.device_id;
    mqttclient.publish(`server/${device_id}/reset`, JSON.stringify(payload));
    res.status(200).send("Diagnosis command accepted");
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