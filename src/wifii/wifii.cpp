#include "wifii.h"

IPAddress setupAP(WiFiClass &wifi, const String &ssid, const String &password)
{
    wifi.mode(WIFI_AP_STA);

    wifi.disconnect();
    wifi.softAP(ssid, password);

    return wifi.softAPIP();
}