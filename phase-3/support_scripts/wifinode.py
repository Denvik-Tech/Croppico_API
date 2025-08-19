var Wifi = require('rpi-wifi-connection');
var wifi = new Wifi();
var ssiD = process.argv[2]
var pwD = process.argv[3]
//wifi.connect({ssid:'"' + ssiD + '"', psk:'"' + pwD + '"'}).then(() => {
//    console.log('Connected to network.');
wifi.connect({ssid:ssiD, psk:pwD}).then(() => {
    console.log('Connected to network.');
})
.catch((error) => {
    console.log(error);
});
