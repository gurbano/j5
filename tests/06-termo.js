var five = require("johnny-five");
//https://github.com/ajfisher/node-pixel
var board = new five.Board();


board.on("ready", function() {

  var temperature = new five.Temperature({
   controller: "DS18B20",
  pin: "A0"
  });

  temperature.on("data", function(a) {
    console.log("celsius: %d", this.celsius);
  });
});