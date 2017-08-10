var SerialPort = require("serialport");
var port = new SerialPort('/dev/ttyACM0');
const Readline = SerialPort.parsers.Readline;
const parser = new Readline();
port.pipe(parser);


port.on('open', function(){
  console.log('Serial Port Opend');
  parser.on('data', function(data){
    console.log(data.toString());
  });
});