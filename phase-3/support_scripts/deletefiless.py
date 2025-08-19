import subprocess
import os
from datetime import datetime, timedelta


def count_files_in_folder(folder_path):
    try:
        # Run the ls command to list files in the folder
        result = subprocess.run(['ls', folder_path], capture_output=True, text=True)

        # Count the number of lines (files) in the output
        file_count = len(result.stdout.splitlines())
        return file_count
    except FileNotFoundError:
        print("Folder not found.")
        return -1


def list_files_in_folder(folder_path):
    # List all files in the folder
    try:
        files = os.listdir(folder_path)
        return files
    except FileNotFoundError:
        print("Folder not found.")
        return []


def filter_and_delete_old_log_files(files, folder_path):
    # Get current date and calculate date one month ago
    current_date = datetime.now()
    one_month_ago = current_date - timedelta(days=30)

    # Filter log files older than one month and delete them
    for file in files:
        if file.endswith('.log'):
            file_path = os.path.join(folder_path, file)
            # Get file creation time
            file_creation_time = datetime.strptime(file[:10], '%Y-%m-%d')
            if file_creation_time < one_month_ago:
                # If the file is older than one month, delete it
                os.remove(file_path)
                print(f"Deleted log file older than a month: {file_path}")


def main():
    # Specify the directory where you want to work
    folder_path = "/var/log/croppico"

    # Count files in the folder
    num_files = count_files_in_folder(folder_path)
    print(f"Number of files in the directory: {num_files}")

    # List files in the folder
    files = list_files_in_folder(folder_path)

    # Filter and delete log files older than one month
    filter_and_delete_old_log_files(files, folder_path)

    # List remaining log files
    print("Remaining log files:")
    for file in files:
        if file.endswith('.log'):
            print(file)


if __name__ == "__main__":
    main()
