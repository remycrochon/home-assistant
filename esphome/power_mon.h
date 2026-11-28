#include "esphome.h"

using namespace esphome;

#define ADC_BITS 12 //12 for esp32 & 10 for esp8266
#define ADC_COUNTS (1 << ADC_BITS)
const float ICAL = 90.9; // default calibration factor: 90.9 for ESP32, 111.1 fro esp8266
const int powerPin = 32;  // ADC PIN for powerMon: A0 for esp8266, 36 for esp32
double filteredI = 0;
double offsetI, sqI, sumI, Irms;
int sample = 0;

class CustomPowerMon : public PollingComponent, public sensor::Sensor
{
  public:
    CustomPowerMon() : PollingComponent(500) {}

    double calcIrms(unsigned int Number_of_Samples, int pin)
    {
        for (unsigned int n = 0; n < Number_of_Samples; n++)
        {
            sample = analogRead(pin);
            // Digital low pass filter extracts the 2.5 V or 1.65 V dc offset,
            //  then subtract this - signal is now centered on 0 counts.
            offsetI = (offsetI + (sample - offsetI) / 1024);
            filteredI = sample - offsetI;
            // Root-mean-square method current
            // 1) square current values
            sqI = filteredI * filteredI;
            // 2) sum
            sumI += sqI;
        }
        double I_RATIO = ICAL * ((3300 / 1000.0) / (ADC_COUNTS));
        Irms = I_RATIO * sqrt(sumI / Number_of_Samples);
        sumI = 0;
        return Irms;
    }

    void setup() override
    {
        delay(10);
        offsetI = ADC_COUNTS >> 1;
    }
    void update() override
    {
        double Irms = calcIrms(1480, powerPin); // Calculate current
        double dPower = Irms * 235; // Irms * volts
        publish_state(dPower);
    }
};