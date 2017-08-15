#include <Adafruit_NeoPixel.h>
#include <SimpleDHT.h>

int pinDHT11 = 5;
SimpleDHT11 dht11;

//DATA
byte temperature = 0;
byte humidity = 0;

void updateDHT11(){
	byte data[40] = {0};
	if (dht11.read(pinDHT11, &temperature, &humidity, data)) {
		//Serial.print("Read DHT11 failed");
		return;
	}
}

void outputSerial(){
	Serial.print((int)temperature);//2 byte
	Serial.print((char)'|');//2 byte
	Serial.print((int)humidity);//2 byte
	Serial.print((char)'|');//2 byte
	Serial.println();
}



void setup() {
  Serial.begin(9600);
}

void loop() {
	updateDHT11();
	outputSerial();



	delay(5000);
}
