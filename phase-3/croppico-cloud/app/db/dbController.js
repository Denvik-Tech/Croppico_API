// const postgres = require('postgres');
const {Pool,Client} = require('pg')
const dbOpts = require("../config/db.config")
const query = require('./query');

const createClient=()=>{
    // return postgres(process.env.POSTGRES_CONNECTION_STRING,dbOpts);
    console.log(dbOpts);
    return new Pool(dbOpts)
}

const tables={
    deviceList:"cropicco_device_list",
    alarmLog:"cropicco_alarm_log",
    adhoc:"cropicco_adhoc",
    settings:"cropicco_device_settings",
    dataLog:"cropicco_data_log",
    recentData:"cropicco_recent_data",
    notificationLog:"cropicco_notification_log",
    eventLog:"cropicco_event_log"
}

const execute = (dbClient, query) =>{

}

module.exports={
    createClient:createClient,
    tables:tables,
    execute:execute,
    query:query
}