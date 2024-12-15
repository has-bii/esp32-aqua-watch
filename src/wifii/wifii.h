#ifndef WIFII_H
#define WIFII_H

#include <Arduino.h>
#include <WiFi.h>

IPAddress setupAP(WiFiClass &wifi, const String &ssid, const String &password);

#endif