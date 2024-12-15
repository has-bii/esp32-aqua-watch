// wifi_connection.h
#ifndef TEMPERATURE_H
#define TEMPERATURE_H

#include <Arduino.h>
#include <OneWire.h>
#include <DallasTemperature.h>

float getTemperature(DallasTemperature &sensors);

#endif
