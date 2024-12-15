#include "temperature.h"

float getTemperature(DallasTemperature &sensors)
{
  sensors.requestTemperatures();

  return sensors.getTempCByIndex(0);
}