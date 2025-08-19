import subprocess
import re


def get_wifi_strength(interface='wlan0'):
    try:
        result = subprocess.check_output(['iwconfig', interface], stderr=subprocess.STDOUT, text=True)
        match = re.search(r'Signal level=(-\d+)', result)

        if match:
            signal_strength = int(match.group(1))
            if signal_strength is None:
                return "Unknown"
            elif signal_strength >= -50:
                return "Good"
            elif -50 > signal_strength >= -70:
                return "Medium"
            else:
                return "Low"
        else:
            return None

    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        return None


def main():
    wifi_interface = 'wlan0'
    wifi_strength = get_wifi_strength(wifi_interface)
    if wifi_strength is not None:
        print(f"Wi-Fi Signal Strength: {wifi_strength} dBm")
    else:
        print("Unable to retrieve Wi-Fi signal strength.")


if __name__ == "__main__":
    main()
