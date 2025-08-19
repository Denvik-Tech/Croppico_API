import os
import shutil
from datetime import datetime, timedelta
import re

# Define the source directory and target directory
SOURCE_DIR = "/var/log"
TARGET_DIR = os.path.expanduser("/home/syslog_backup")
IDENTIFIER = "Croppico_Backup_SD"

# Create the target directory if it doesn't exist
os.makedirs(TARGET_DIR, exist_ok=True)

# Get today's date
current_date = datetime.now()

# Function to calculate the date offset
def calculate_date(offset):
    return (current_date - timedelta(days=offset)).strftime('%Y-%m-%d')

# Copy and rename the syslog files with the appropriate dates
for filename in os.listdir(SOURCE_DIR):
    if filename.startswith("syslog"):
        # Determine the offset based on the file name
        match = re.search(r'(\d+)', filename)
        if match:
            number = int(match.group(1))
            new_date = calculate_date(number)
        else:
            new_date = calculate_date(0)  # No number in the filename, use today's date
        
        name, ext = os.path.splitext(filename)
        if ext == '.gz':
            name, ext2 = os.path.splitext(name)
            new_filename = f"{name}_{new_date}_{IDENTIFIER}{ext2}{ext}"
        else:
            new_filename = f"{name}_{new_date}_{IDENTIFIER}{ext}"
        
        new_filepath = os.path.join(TARGET_DIR, new_filename)
        
        shutil.copy2(os.path.join(SOURCE_DIR, filename), new_filepath)
        os.chmod(new_filepath, 0o777)

print(f"Syslog files have been copied to {TARGET_DIR} with updated names and permissions changed to 777.")
