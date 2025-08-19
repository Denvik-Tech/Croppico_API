import subprocess
# import wifimanage as wfm
import wifi


def Search():
    wifilist = []

    cells = wifi.Cell.all('wlan0')
    for cell in cells:
        wifilist.append(cell.ssid)
    return wifilist


def call():
    try:
        cur = str(subprocess.check_output(["sudo", "iwgetid"])).split('"')[1]
        res = {'cur': cur}
        # return res
        print(res)
    except:
        cur = str("nun")
        res = {'cur': cur}
        # return res
        print(res)

def calling():
    cur = str(subprocess.check_output(["sudo", "iwgetid"])).split('"')[1]
    res = {'cur': cur}
    # return res
    print(res)

def first():
    cur = str(subprocess.check_output(["sudo", "iwgetid"]))
    print(cur)

def second():
    cur = Search()
    print(cur)


if __name__ == '__main__':
    second()
    # app.run(port=14999, host="0.0.0.0")




    # try:
    #     cur = str(subprocess.check_output(["sudo", "iwgetid"])).split('"')[1]
    #     res = {'res': wfm.Search(), 'cur': cur}
    #     return res
    # except:
    #     res = {'res': wfm.Search()}
    #     return res