import sqlite3, json
from datetime import datetime, timedelta


def get_ph_a_dose_in_range(start_timestamp, end_timestamp):
    conn = sqlite3.connect('sensor_data.db')
    cursor = conn.cursor()
    cursor.execute('''
        SELECT timestamp, PH
        FROM sensor_data
        WHERE timestamp BETWEEN ? AND ?
    ''', (start_timestamp, end_timestamp))
    results = cursor.fetchall()
    conn.close()
    data = [{'timestamp': row[0], 'PH': row[1]} for row in results]
    return data


end_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
start_timestamp = (datetime.now() - timedelta(hours=4)).strftime("%Y-%m-%d %H:%M:%S")
results = get_ph_a_dose_in_range(start_timestamp, end_timestamp)

json_output = json.dumps(results, indent=2)
print(json_output)
# print("Timestamp\t\tPH A Dose")
# for result in results:
#     print(f"{result[0]}\t{result[1]}")
