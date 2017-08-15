var XBoxController = require('better-xbox-controller');
var USB = require('usb');
 
var device = USB.findByIds(0,3500, 350);
var controller = new XBoxController(device);
 
// setting event handlers 
 
//open the controller 


controller.on('button', function(key, val){
	console.log(key, val)
})

controller.on('trigger', function(key, val){
	console.log(key, val)
})

controller.on('error', function(key, val){
	console.log(key, val)
})

controller.open()