#include <Arduino.h>
#include <LiquidCrystal_I2C.h>
#include <temperature/temperature.h>
#include <lcd/lcd.h>
#include <wifii/wifii.h>
#include <webserverr/webserverr.h>
#include <HTTPClient.h>

const int BOOT_BUTTON = 0;

// Access Point
const String ssidAP = "Aqua Watch";
const String passwordAP = "aquawatch";
IPAddress ipAddressAP;

// Temperature
const int tempSignalPin = 23;
float currentTemp;
OneWire oneWire(tempSignalPin);
DallasTemperature sensors(&oneWire);

// LCD
const int lcdColumns = 16;
const int lcdRows = 2;
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);

// Webserver
AsyncWebServer server(80);

// User Configuration
String userToken;
const String API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3bHVsaGtyZWZvYmFvb3htY3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NDM5ODIsImV4cCI6MjA0OTQxOTk4Mn0.LGGDDHaAcH4f645jT3IC5-adPSku4BbRip52-Ui6e08"; // Replace with your API key
const String login_url = "https://ewlulhkrefobaooxmctt.supabase.co/auth/v1/token?grant_type=password";
const String insert_url = "https://ewlulhkrefobaooxmctt.supabase.co/rest/v1/dataset";

// HTTPClient
HTTPClient http;
int httpResponseCode;

// Measurement
JsonDocument measJson;
String meas;
bool disableUpload = false;

// WiFi
JsonDocument wifiiJson;
String wifiiConf;

// Delay
unsigned long lastLoopTime = 0;
const int loopInterval = 60000; // 60 seconds

// Debounce for boot button
bool lastButtonState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

// Menu
int menu = 1;

bool checkUser()
{
  String userConf = readFileToString("/user.json");
  if (userConf.isEmpty())
    return false;

  JsonDocument userJson;
  DeserializationError error = deserializeJson(userJson, userConf);

  if (error)
  {
    SPIFFS.remove("/user.json");
    return false;
  }
  return true;
}

bool checkEnv()
{
  String envConf = readFileToString("/environment.json");
  if (envConf.isEmpty())
    return false;

  DeserializationError error = deserializeJson(envJson, envConf);

  if (error)
  {
    SPIFFS.remove("/environment.json");
    return false;
  }
  return true;
}

void getMeasurement()
{
  measJson["temp"] = getTemperature(sensors);
}

bool signIn()
{
  http.begin(login_url);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("apikey", API_KEY);

  JsonDocument userJson;
  String userConf = readFileToString("/user.json");
  deserializeJson(userJson, userConf);

  String requestBody;
  serializeJson(userJson, requestBody);

  httpResponseCode = http.POST(requestBody);

  if (httpResponseCode != 200)
  {
    LCDPrint(lcd, "Failed to login!", 2);
    http.end();
    return false;
  }

  String payload = http.getString();
  JsonDocument response;
  deserializeJson(response, payload);
  userToken = response["access_token"].as<String>();

  http.end();
  return true;
}

bool sendData()
{
  if (!envJson["id"].is<String>())
  {
    LCDPrint(lcd, "Env ID missing!", 2);
    return false;
  }

  measJson["env_id"] = envJson["id"].as<String>();

  serializeJson(measJson, meas);
  http.begin(insert_url);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("apikey", API_KEY);
  http.addHeader("Authorization", "Bearer " + userToken);

  LCDPrintTop(lcd, "Sending...");

  httpResponseCode = http.POST(meas);

  if (httpResponseCode != 201)
  {
    LCDPrint(lcd, "Failed to send!", 2);
    userToken = "";
    http.end();
    return false;
  }

  LCDPrint(lcd, "Data sent", 2);
  http.end();
  return true;
}

String workTime(unsigned long &currentMillis)
{
  // Convert milliseconds to seconds, minutes, hours, and days
  unsigned long seconds = currentMillis / 1000;
  unsigned long minutes = seconds / 60;
  unsigned long hours = minutes / 60;
  unsigned long days = hours / 24;

  // Calculate remaining time after converting to larger units
  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return String(days) + ":" + String(hours) + ":" + String(minutes) + ":" + String(seconds);
}

void printMenu(unsigned long &currentMillis)
{
  switch (menu)
  {
  case 1:
    getMeasurement();
    lcd.home();
    lcd.print(workTime(currentMillis));
    lcd.setCursor(0, 1);
    lcd.print(String(measJson["temp"].as<float>()) + "c");
    lcd.setCursor(8, 1);
    lcd.print(String(disableUpload ? "Disabled" : "Enabled"));
    break;

  case 2:
    if (WiFi.status() == WL_CONNECTED)
    {

      if (wifiiConf.isEmpty())
      {
        wifiiConf = readFileToString("/wifi.json");
        deserializeJson(wifiiJson, wifiiConf);
      }

      if (wifiiJson["ssid"].is<String>())
      {
        lcd.setCursor(0, 0);
        lcd.print(String(wifiiJson["ssid"].as<String>()));
        lcd.setCursor(0, 1);
        lcd.print(WiFi.localIP().toString());
      }
    }
    else
    {
      lcd.setCursor(0, 0);
      lcd.print("Aqua Watch");
      lcd.setCursor(0, 1);
      lcd.print(WiFi.softAPIP().toString());
    }
    break;

  case 3:
    lcd.setCursor(0, 0);
    lcd.print("Free heap: ");
    lcd.setCursor(10, 0);
    lcd.print(String((ESP.getFreeHeap() * 100.0) / 327680, 2) + "%");
    lcd.setCursor(1, 0);
    lcd.print(String(ESP.getFreeHeap()));
    break;

  default:
    break;
  }

  delay(1000);
  lcd.clear();
}

void setup()
{
  Serial.begin(115200);
  sensors.begin();
  readFileInit();
  lcd.init();
  lcd.backlight();

  LCDPrint(lcd, "Setting access point...", 2);
  ipAddressAP = setupAP(WiFi, ssidAP, passwordAP);

  LCDPrint(lcd, "Scanning networks...", 2);
  WiFi.scanNetworks(true);

  LCDPrint(lcd, "Setting Webserver...", 2);
  setupWebserver(server, lcd);
  getMeasurement();
}

void loop()
{
  unsigned long currentMillis = millis();

  // print Menu
  printMenu(currentMillis);

  // Check the state of the boot button
  bool buttonState = digitalRead(BOOT_BUTTON);

  // Start tracking the press duration
  if (buttonState == LOW && lastButtonState == HIGH)
  {
    lastDebounceTime = currentMillis; // Button press detected
  }

  // Check for a long button press (hold for 2 seconds)
  if (buttonState == LOW && (currentMillis - lastDebounceTime) >= 2000)
  {
    menu++;
    lcd.clear();
    if (menu > 3)
      menu = 1;
    lastDebounceTime = currentMillis; // Reset debounce time to avoid repeated message
  }

  // If the button remains pressed, calculate the hold time
  if (buttonState == LOW && (currentMillis - lastDebounceTime) >= 5000)
  { // 5 seconds
    disableUpload = !disableUpload;
    LCDPrint(lcd, disableUpload ? "Upload Disabled" : "Upload Enabled", 2);
    lcd.clear();
    lastDebounceTime = currentMillis; // Reset debounce time to avoid rapid toggling
  }

  // Update the last button state
  lastButtonState = buttonState;

  // Display prompt for toggling upload on the LCD
  if (currentMillis - lastLoopTime >= loopInterval)
  {
    lastLoopTime = currentMillis;

    getMeasurement();

    if (WiFi.status() == WL_CONNECTED && !disableUpload)
    {
      if (!checkUser() || userToken.isEmpty() && !signIn() || !checkEnv() || !sendData())
      {
        return;
      }
    }
  }
}
