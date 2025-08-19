const { Pool } = require('pg');

// Configure PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'croppico-uat.cfnrjbyr4xho.ap-south-1.rds.amazonaws.com',
    database: 'croppico_uat',
    password: 'o8zWlo6GhFFzbjlO5mz4',
    port: 5432, // Default PostgreSQL port
    max: 1 // Wait for 2 seconds before timing out
});

// Function to get unset notifications from the database
const getUnsetNotification = async (device_id, peripheral) => {
    const query = `SELECT * FROM master_catalog.devicenotification_log 
                   WHERE isopen = 1 AND deviceid = $1 AND peripheral = $2 
                   ORDER BY created_timestamp LIMIT 1`;
    const values = [device_id, peripheral];

    const startTime = Date.now();

    try {
        const res = await pool.query(query, values);
        const endTime = Date.now();
        const executionTime = endTime - startTime;
        console.log('Unset notification retrieved:', res.rows[0]);
        console.log(`Execution time: ${executionTime} ms`);
        return res.rows[0];
    } catch (error) {
        console.error('Error retrieving unset notifications:', error);
    } finally {
        // Close database connection
        await pool.end();
    }
};

// Call function to get unset notifications with a sample device_id and peripheral
getUnsetNotification('000000003b93bb2e', 'supp_ec_pump');