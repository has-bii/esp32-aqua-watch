#include "supabase.h"

// API Endpoint
const char* endpoint = "https://ewlulhkrefobaooxmctt.supabase.co/rest/v1/dataset";

// API Key
const char* apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3bHVsaGtyZWZvYmFvb3htY3R0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzg0Mzk4MiwiZXhwIjoyMDQ5NDE5OTgyfQ.TYXTgYO5t6QPTa0P-9T1eRGetamvGVtGD_X5o4FDqy4";

// Authorization Bearer Token
const char* bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3bHVsaGtyZWZvYmFvb3htY3R0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzg0Mzk4MiwiZXhwIjoyMDQ5NDE5OTgyfQ.TYXTgYO5t6QPTa0P-9T1eRGetamvGVtGD_X5o4FDqy4";

// HTTPClient http;

// // Configure the request
// http.begin(endpoint);
// http.addHeader("apikey", apiKey);
// http.addHeader("Authorization", String("Bearer ") + bearerToken);
// http.addHeader("Content-Type", "application/json");
// http.addHeader("Prefer", "return=minimal");

// // JSON payload
// String payload = R"({"temp": 20})";

// // Send POST request
// int httpResponseCode = http.POST(payload);

// // Check the response
// if (httpResponseCode > 0) {
//     Serial.print("HTTP Response code: ");
//     Serial.println(httpResponseCode);

//     String response = http.getString();
//     Serial.println("Response:");
//     Serial.println(response);
// } else {
//     Serial.print("Error on HTTP request: ");
//     Serial.println(httpResponseCode);
// }

// // Free resources
// http.end();