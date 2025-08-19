import sqlite3

def cleanup_old_data():
    db_path = '/home/pi/croppico-api-new/sensor_data.db'
    
    # Connect to the SQLite database
    conn = sqlite3.connect(db_path)
    
    # Set a busy timeout of 5 seconds (5000 milliseconds)
    conn.execute("PRAGMA busy_timeout = 5000;")
    
    cursor = conn.cursor()

    # Calculate the timestamp for 24 hours ago
    import datetime
    time_threshold = datetime.datetime.now() - datetime.timedelta(days=2)
    time_threshold_str = time_threshold.strftime("%Y-%m-%d %H:%M:%S")

    # Delete records older than 24 hours
    cursor.execute('''
        DELETE FROM sensor_data
        WHERE timestamp < ?
    ''', (time_threshold_str,))

    # Commit the transaction
    conn.commit()

    # Run the VACUUM command to reduce the database size
    cursor.execute("VACUUM;")

    # Close the connection
    conn.close()

# Example usage:
cleanup_old_data()
