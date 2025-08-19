import os

def get_file_list(folder_path, file_type):
    file_list = []
    for filename in os.listdir(folder_path):
        if filename.endswith(file_type):
            file_url = f"{folder_path}/{filename}"
            file_list.append({'name': filename, 'url': file_url})
    return file_list

demo_pdf_folder = '/var/www/html/demo_pdf'
demo_video_folder = '/var/www/html/demo_video'

pdf_files = get_file_list(demo_pdf_folder, '.pdf')
video_files = get_file_list(demo_video_folder, '.mp4')

result = {'Video': video_files, 'pdf': pdf_files}

print(result)
