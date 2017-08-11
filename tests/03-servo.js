var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Create an Led on pin 13
  
  var servo = new five.Servo({
    pin: 11
  });
  console.info(servo);
   servo.cw(1);
});