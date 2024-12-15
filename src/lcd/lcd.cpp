#include "lcd.h"

void LCDPrintNoDelay(LiquidCrystal_I2C &lcd, const String &text)
{
    lcd.clear();
    lcd.setCursor(0, 0);
    if (text.length() <= 16)
    {
        lcd.print(text);
    }
    else
    {
        lcd.print(text.substring(0, 16));
        lcd.setCursor(0, 1);
        lcd.print(text.substring(16));
    }
    delay(1000);
}

void LCDPrint(LiquidCrystal_I2C &lcd, const String &text, const int duration)
{
    lcd.clear();

    lcd.setCursor(0, 0);
    if (text.length() <= 16)
    {
        lcd.print(text);
    }
    else
    {
        lcd.print(text.substring(0, 16));
        lcd.setCursor(0, 1);
        lcd.print(text.substring(16));
    }
    delay(duration * 1000);
    lcd.clear();
}

void LCDPrintTop(LiquidCrystal_I2C &lcd, const String &text)
{
    lcd.setCursor(0, 0);
    lcd.print(text);
}

void LCDPrintBot(LiquidCrystal_I2C &lcd, const String &text)
{
    lcd.setCursor(0, 1);
    lcd.print(text);
}
