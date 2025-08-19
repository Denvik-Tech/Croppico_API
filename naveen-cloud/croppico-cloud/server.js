require('dotenv').config();
const app = module.exports = require('express')();
const cors = require('cors');
var server = require('http').createServer(app);
const bodyparser = require('body-parser');
const routes = require('./app/routes');
const dbController = require('./app/db/dbController');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

routes(app);
global.postgresql = dbController.createClient();
global.mqttService = require('./app/mqtt.service'); // make the sendDownlinkData function globally accessible.
// console.log(postgresql)
server.listen(process.env.APIPORT, () => {
    console.log(`API started at ${process.env.APIHOST} : ${process.env.APIPORT} `)
});