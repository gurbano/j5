

var initRoutes = function(server, SerialReader){
		server.addHook('sensors','temp',async function (ctx) {
		ctx.body = SerialReader.getTemp();
		return ctx;
	});
	server.addHook('sensors','hum',async function (ctx) {
		ctx.body = SerialReader.getHum();
		return ctx;
	});

}

module.exports = initRoutes;