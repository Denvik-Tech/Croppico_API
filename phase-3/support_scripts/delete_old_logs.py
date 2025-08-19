import os

from datetime import datetime, timedelta


def count_log_files(folder_path):
    try:
        os.chdir(folder_path)
        log_files = [f for f in os.listdir() if os.path.isfile(f) and f.endswith('.log')]
        return len(log_files)
    except FileNotFoundError:
        return -1


def delete_old_logs(folder_path):
    try:
        coun = 0
        os.chdir(folder_path)
        for file_name in os.listdir():
            if file_name.endswith('.log'):
                file_date = datetime.strptime(file_name[:10], '%Y-%m-%d')
                if (datetime.now() - file_date) > timedelta(days=2):  # Assuming a month has 31 days
                    coun = coun + 1
                    os.remove(file_name)
        if coun == 0:
            print("No old log files found.")
        else:
            print(f"{coun} Old log files deleted successfully.")
    except FileNotFoundError:
        pass


# Path to the logs folder
logs_folder_path = "/var/logs/croppico"

# Count log files and display the count
log_count = count_log_files(logs_folder_path)
print(f"Number of log files: {log_count}")

# Delete old log files
delete_old_logs(logs_folder_path)
