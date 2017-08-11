import RS from './koa/koa'
import SR from './modules/sensors'
//carica i moduli
const SerialReader = new SR();


// 1 - Fa partire il server 
const server = new RS();

import testRoute from './routes/test'
server.addRoute(testRoute);

server.addHook('sensors','temp',async function (ctx) {
	ctx.body = SerialReader.getTemp();
	return ctx;
});
server.addHook('sensors','hum',async function (ctx) {
	ctx.body = SerialReader.getHum();
	return ctx;
});


server.start(8080)
