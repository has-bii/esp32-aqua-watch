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
const String API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3bHVsaGtyZWZvYmFvb3htY3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NDM5ODIsImV4cCI6MjA0OTQxOTk4Mn0.LGGDDHaAcH4f645jT3IC5-adPSku4BbRip52-Ui6e08";
const String login_url = "https://ewlulhkrefobaooxmctt.supabase.co/auth/v1/token?grant_type=password";
const String insert_url = "https://ewlulhkrefobaooxmctt.supabase.co/rest/v1/dataset";

// HTTPClient
HTTPClient http;
int httpResponseCode;

// Measurement
JsonDocument measJson;
String meas;
bool disableUpload = false;

// delayy
int delayy = 1000 * 60;

bool checkUser()
{
  userConf = readFileToString("/user.json");

  if (userConf.isEmpty())
    return false;

  DeserializationError error = deserializeJson(userJson, userConf);

  if (error)
  {
    SPIFFS.remove("/user.json");
    return false;
  }
  userConf.clear();

  return true;
}

bool checkEnv()
{
  envConf = readFileToString("/environment.json");

  if (envConf.isEmpty())
    return false;

  DeserializationError error = deserializeJson(envJson, envConf);

  if (error)
  {
    SPIFFS.remove("/environment.json");
    return false;
  }
  envConf.clear();

  return true;
}

void getMeasurement()
{
  lcd.clear();

  if (WiFi.status() == WL_CONNECTED)
    LCDPrintTop(lcd, WiFi.localIP().toString());
  else
    LCDPrintTop(lcd, WiFi.softAPIP().toString());

  measJson["temp"] = getTemperature(sensors);
  LCDPrintBot(lcd, String(measJson["temp"].as<float>()) + "C");
}

void printHeapUsage()
{
  Serial.println("Free Heap: " + String(ESP.getFreeHeap()));
}

bool signIn()
{
  http.begin(login_url);

  // Signing to get user_token
  http.addHeader("Content-Type", "application/json");
  http.addHeader("apikey", API_KEY);

  serializeJson(userJson, userConf);

  // Send the POST request with the body
  httpResponseCode = http.POST(userConf);

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
  response.clear();

  http.end(); // Free resources

  return true;
}

bool sendData()
{
  // Set payload
  measJson["env_id"] = envJson["id"].as<String>();

  serializeJson(measJson, meas);

  measJson.clear();

  // send temp
  http.begin(insert_url);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("apikey", API_KEY);
  http.addHeader("Authorization", "Bearer " + userToken);

  LCDPrintTop(lcd, "Sending...");

  // Send the POST request with the body
  httpResponseCode = http.POST(meas);

  if (httpResponseCode != 201)
  {
    LCDPrint(lcd, "Failed to send!", 2);
    delayy -= 2000;
    http.end();
    userToken.clear();
    return false;
  }

  LCDPrint(lcd, "Data has been sent", 2);
  delayy -= 2000;
  http.end();
  return true;
}

void setup()
{
  // Start the Serial Monitor
  Serial.begin(115200);

  // init temp
  sensors.begin();

  // init SPIFFS
  readFileInit();

  // LCD init
  lcd.init();
  lcd.backlight();

  // Setup Access Point
  LCDPrint(lcd, "Setting access point..", 2);
  ipAddressAP = setupAP(WiFi, ssidAP, passwordAP);

  // Scan networks
  LCDPrint(lcd, "Scanning networks...", 2);
  WiFi.scanNetworks(true);

  // Setup webserver
  LCDPrint(lcd, "Setting Webserver..", 2);
  setupWebserver(server, lcd);
}

void loop()
{
  if (digitalRead(BOOT_BUTTON) == LOW && !disableUpload)
  {
    LCDPrint(lcd, "Disable upload", 2);
    delayy -= 2000;
    disableUpload = true;
  }
  else
  {
    LCDPrint(lcd, "Enable upload", 2);
    delayy -= 2000;
    disableUpload = false;
  }

  getMeasurement();

  if (WiFi.status() == WL_CONNECTED && !disableUpload)
  {
    // check user
    if (!checkUser())
      return;

    // Check userToken
    if (userToken.isEmpty())
    {
      if (!signIn())
        return;
    }

    // Check env
    if (!checkEnv())
      return;

    // Send data
    if (!sendData())
      return;
  }

  getMeasurement();

  printHeapUsage();

  delay(delayy);
  delayy = 60000;
  Serial.println("Loop");
}