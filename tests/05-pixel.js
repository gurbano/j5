pixel = require("node-pixel");
five = require("johnny-five");
//https://github.com/ajfisher/node-pixel
var board = new five.Board();
var strip = null;
var tinycolor = require("tinycolor2");


var LIMIT = 200 * 200 * 200;


var roma = ['#F2A900','#862633'];

Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

function get_random_color() {
    var letters = 'ABCDE'.split('');
    var color = '#';
    for (var i=0; i<3; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function getColor(c){
    return [
        '#CD5C5C',
        '#F08080',
        '#FA8072',
        '#E9967A',
        '#FFA07A',
        '#00FF00',
        '#0000FF',
        '#000080',
        '#800080',
        '#00FFFF'
    ]/*.shuffle()*/[c];
}
var LENGTH = 42;
var loop = function (strip, count) {
    console.log('loop', count)
    for (var l = 0 ; l<LENGTH; l++){
        //var color = roma[(count + l)%2];
        var c = tinycolor(getColor((count + l ) %10));
        //c = c.spin(l*6);
        strip.pixel(l).color(c.toHexString());
    }
    strip.show();
    if (count>LIMIT){
        strip.color('black');
        strip.off();
        console.log('off');
        return;
    }else{
        count++;
        setTimeout(function() {loop(strip, count)}, 6);
    }
}

board.on("ready", function() {
	console.log('board reday')
    strip = new pixel.Strip({
        board: this,
        controller: "FIRMATA",
        strips: [ {pin: 6, length: LENGTH}, ], // this is preferred form for definition
        gamma: 3.8, // set to a gamma that works nicely for WS2812
    });

    strip.on("ready", function() {
       strip.off();
       setTimeout(function() {loop(strip, 0)}, 1000);
    });
});