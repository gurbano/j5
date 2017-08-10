#include <SimpleDHT.h>

int pinDHT11 = 5;
SimpleDHT11 dht11;


void setup() {
  Serial.begin(9600);
}

void loop() {

	byte temperature = 0;
	byte humidity = 0;
	byte data[40] = {0};
	if (dht11.read(pinDHT11, &temperature, &humidity, data)) {
		//Serial.print("Read DHT11 failed");
		return;
	}

	Serial.print((int)temperature);//2 byte
	Serial.print((char)'|');//2 byte
	Serial.print((int)humidity);//2 byte
	Serial.print((char)'|');//2 byte
	Serial.println();


	
	delay(5000);
}
