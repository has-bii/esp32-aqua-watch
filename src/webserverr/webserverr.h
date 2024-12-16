#ifndef WEBSERVERR_H
#define WEBSERVERR_H

#include <Arduino.h>
#include <ESPAsyncWebServer.h>
#include <ArduinoJson.h>
#include <ReadFile/readfile.h>
#include <lcd/lcd.h>
#include <LiquidCrystal_I2C.h>

extern JsonDocument userJson;
extern String userConf;

extern JsonDocument envJson;
extern String envConf;

extern JsonDocument wifiJson;
extern String wifiConf;

void setupWebserver(AsyncWebServer &server, LiquidCrystal_I2C &lcd);

#endif