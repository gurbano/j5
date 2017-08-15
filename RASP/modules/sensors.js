var SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;

const SerialReader = function (cb) {
	console.log('Sensors starting')

	const self = this;
	this.data = {};
	this.isOpen = false;
	this.port = new SerialPort('/dev/ttyACM0');	
	const parser = new Readline();
	this.port.pipe(parser);
	this.port.on('open', function(){
		self.isOpen = true;
		if (cb){cb.bind(self)(null, self.port);}

		parser.on('data', function(data){	    	
	    	let splitData = data.toString().split('|');
	    	self.data['temp'] = splitData[0];
	    	self.data['hum'] = splitData[1];
	    	console.log(self.data); 
		});
	})
	this.port.on('error', function(err) {
	  console.log('Error: ', err.message);
	  if (cb){cb.bind(self)(err, null);}
	})

}

SerialReader.prototype.ping = function() {
	console.log('Sensori attivati:',this.isOpen)
};
SerialReader.prototype.getTemp = function() {
	return this.data['temp'];
};
SerialReader.prototype.getHum = function() {
	return this.data['hum'];
};

export default SerialReader;