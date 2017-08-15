import SR from './modules/sensors'
const SerialReader = new SR();

var update = function update() {
	console.log(SerialReader.getTemp(),'°','   ',SerialReader.getHum(),'%');
	setTimeout(update , 1000);
}

update();