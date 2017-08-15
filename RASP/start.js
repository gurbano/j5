import RS from './koa/koa'
import SR from './modules/sensors'
//carica i moduli

const SerialReader = new SR(function(err, port){
	if(err){
		console.log('Sensori non attivi');
		return;
	}else{
		this.ping();
	}
});


// 1 - Fa partire il server 
const server = new RS();
import testRoute from './routes/test'
server.addRoute(testRoute);

require('./modules/sensor_routes')(server, SerialReader);


var xbox = require('./modules/xbox');


server.start(8080)
