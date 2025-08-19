# import sqlite3, json
# from datetime import datetime, timedelta
#
#
# def get_ph_a_dose_in_range(start_timestamp, end_timestamp):
#     conn = sqlite3.connect('sensor_data.db')
#     cursor = conn.cursor()
#     cursor.execute('''
#         SELECT timestamp, ph_up_dose
#         FROM sensor_data
#         WHERE timestamp BETWEEN ? AND ?
#     ''', (start_timestamp, end_timestamp))
#     results = cursor.fetchall()
#     conn.close()
#     data = [{'timestamp': row[0], 'value': row[1]} for row in results]
#     return data
#
#
# end_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
# start_timestamp = (datetime.now() - timedelta(hours=4)).strftime("%Y-%m-%d %H:%M:%S")
# results = get_ph_a_dose_in_range(start_timestamp, end_timestamp)
#
# json_output = json.dumps(results, indent=2)
# print(json_output)
# # print("Timestamp\t\tPH A Dose")
# # for result in results:
# #     print(f"{result[0]}\t{result[1]}")
#
#


import sqlite3, json
from datetime import datetime, timedelta


def get_ph_a_dose_in_range(start_timestamp, end_timestamp, column):
    conn = sqlite3.connect('sensor_data.db')
    cursor = conn.cursor()

    cursor.execute('''
        SELECT timestamp, {}
        FROM sensor_data
        WHERE timestamp BETWEEN ? AND ?
    '''.format(column), (start_timestamp, end_timestamp))

    results = cursor.fetchall()

    conn.close()

    data = [{'timestamp': row[0], 'value': row[1]} for row in results]
    return data


end_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
start_timestamp = (datetime.now() - timedelta(hours=4)).strftime("%Y-%m-%d %H:%M:%S")

columns = ["PH", "EC", "water_temp", "ambient_temp", "ec_a_dose", "ec_b_dose", "ph_up_dose", "ph_down_dose"]
all_data = []

for column in columns:
    results = get_ph_a_dose_in_range(start_timestamp, end_timestamp, column)
    all_data.append({column: results})

json_output = json.dumps(all_data, indent=2)
print(json_output)
