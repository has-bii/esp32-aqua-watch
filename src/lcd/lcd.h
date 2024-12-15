#ifndef LCD_H
#define LCD_H

#include <Arduino.h>
#include <LiquidCrystal_I2C.h>

void LCDPrintNoDelay(LiquidCrystal_I2C &lcd, const String &text);
void LCDPrint(LiquidCrystal_I2C &lcd, const String &text, const int duration = 1);
void LCDPrintTop(LiquidCrystal_I2C &lcd, const String &text);
void LCDPrintBot(LiquidCrystal_I2C &lcd, const String &text);

#endif