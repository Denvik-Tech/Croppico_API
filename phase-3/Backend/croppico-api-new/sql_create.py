import sqlite3
from datetime import datetime


def create_database():
    conn = sqlite3.connect('sensor_data.db')
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS sensor_data (
            timestamp TEXT PRIMARY KEY,
            PH REAL,
            EC REAL,
            ambient_temp REAL,
            water_temp REAL,
            ec_a_dose REAL,
            ec_b_dose REAL,
            ph_up_dose REAL,
            ph_down_dose REAL
        )
    ''')

    conn.commit()
    conn.close()


def insert_data(timestamp, ph, ec, ambient_temp, water_temp, ec_a_dose, ec_b_dose, ph_up_dose, ph_down_dose):
    conn = sqlite3.connect('sensor_data.db')
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO sensor_data (
            timestamp, PH, EC, ambient_temp, water_temp, ec_a_dose, ec_b_dose, ph_up_dose, ph_down_dose
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (timestamp, ph, ec, ambient_temp, water_temp, ec_a_dose, ec_b_dose, ph_up_dose, ph_down_dose))

    conn.commit()
    conn.close()


create_database()

current_timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

insert_data(current_timestamp, 7.0, 1.5, 25.0, 20.0, 0.5, 0.7, 0.2, 0.1)
