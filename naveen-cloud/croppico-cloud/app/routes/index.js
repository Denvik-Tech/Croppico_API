module.exports=(app)=>{
    app.use("/getnotifications", require('./notification.route'));
    app.use("/fixmyhomie", require('./fixhomie.route'));
    app.use("/setdeviceprogram", require('./deviceprogram.route'));
    app.use("/adhocsettings", require('./adhocsettings.route'));
}