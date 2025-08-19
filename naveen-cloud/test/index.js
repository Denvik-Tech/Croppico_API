const { Pool } = require('pg');

// Configure PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'croppico-uat.cfnrjbyr4xho.ap-south-1.rds.amazonaws.com',
    database: 'croppico_uat',
    password: 'o8zWlo6GhFFzbjlO5mz4',
    port: 5432, // Default PostgreSQL port
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Wait for 2 seconds before timing out
});

// Function to execute insertDataToDataLog query
const insertDataToDataLog = (device_id, msgData) => {
    const query = `INSERT INTO master_catalog.devicecurrentsetting_log 
        ("deviceId", ec, ph, waterr_temp, light_on_off_layers, light_Intensity, 
        ambient_temperature, ambient_humidity, water_flow_rate, supp_ph_inc_lev, 
        supp_ph_dec_lev, supp_ec_a_lev, supp_ec_b_lev, "hasAlarm", created_timestamp, 
        water_level_indicator)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`;
    const values = [
        device_id,
        msgData.water_ec,
        msgData.water_pH,
        msgData.water_temperature,
        msgData.light_stat,
        msgData.light_brightness,
        msgData.ambient_temp,
        msgData.ambient_humid,
        msgData.water_flow,
        msgData.supp_ph_inc,
        msgData.supp_ph_dec,
        msgData.supp_ec_a,
        msgData.supp_ec_b,
        msgData.error,
        getDate(msgData.timestamp),
        !Boolean(Number(msgData.water_level))
    ];

    return pool.query(query, values);
};

// Function to execute insertToAlarmLog query
const insertToAlarmLog = (device_id, msgData) => {
    const query = `INSERT INTO master_catalog.devicealarm_log 
        (water_pump, water_chiller, water_temperature_sensor, ambient_sensor, 
        ph_sensor, ec_sensor, supp_ec_pump, supp_ph_inc_pump, supp_ph_dec_pump, 
        deviceid, created_timestamp, transpiration_error)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
    const values = [
        msgData.water_pump,
        msgData.water_chiller,
        msgData.water_temperature_sensor,
        msgData.ambient_sensor,
        msgData.ph_sensor,
        msgData.ec_sensor,
        msgData.supp_ec_pump,
        msgData.supp_ph_inc_pump,
        msgData.supp_ph_dec_pump,
        device_id,
        getDate(msgData.timestamp),
        msgData.transpiration_error || '0'
    ];

    return pool.query(query, values);
};

// Function to get current timestamp in PostgreSQL-compatible format
const getDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
    return date.toISOString(); // Adjust format as per PostgreSQL's requirements
};

// Function to execute both queries and log execution time
const executeQueries = async () => {
    const startTime = Date.now();

    try {
        // Example data from the question
        const sampleData1 = {
            "water_pump": "0", 
            "water_flow_sensor": "0", 
            "water_chiller": "0", 
            "water_temperature_sensor": "0", 
            "ambient_sensor": "0", 
            "ph_sensor": "0", 
            "ec_sensor": "0", 
            "supp_ec_pump": "0", 
            "supp_ph_inc_pump": "0", 
            "supp_ph_dec_pump": "0", 
            "transpiration_error": "1", 
            "supp_ph_inc": "0", 
            "supp_ph_dec": "0", 
            "supp_ec_a": "0", 
            "supp_ec_b": "1", 
            "timestamp": 1719229377
        };

        const sampleData2 = {
            "water_temperature": "27.13", 
            "water_level": "1", 
            "water_flow": "0.00", 
            "ambient_temp": "28.47", 
            "ambient_humid": "52.73", 
            "water_pH": "6.15", 
            "water_ec": "861.00", 
            "supp_ph_inc": "1", 
            "supp_ph_dec": "1", 
            "supp_ec_a": "1", 
            "supp_ec_b": "0", 
            "light_brightness": 100, 
            "light_stat": "true:true:true:true:true", 
            "irrigation_state": "0", 
            "chiller_state": "0", 
            "ec_a_pump": "0", 
            "ec_b_pump": "0", 
            "ph_inc_pump": "0", 
            "ph_dec_pump": "0", 
            "error": "1", 
            "timestamp": 1719229356
        };

        // Example device_id
        const device_id = 'your_device_id';

        // Execute insertDataToDataLog query for sampleData1
        await insertDataToDataLog(device_id, sampleData1);

        // Execute insertToAlarmLog query for sampleData2
        await insertToAlarmLog(device_id, sampleData2);

        const endTime = Date.now();
        const executionTime = endTime - startTime;
        console.log(`Execution time: ${executionTime} ms`);
    } catch (error) {
        console.error('Error executing queries:', error);
    } finally {
        // Close database connection
        await pool.end();
    }
};

// Call function to execute both queries
executeQueries();
