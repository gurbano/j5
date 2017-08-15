import Koa from 'koa'
import Router from 'koa-router'

const Server = function (routes) {
	const self = this;
	this.app = new Koa();	
	(routes || []).forEach((route) => {
	    self.addRoute(route);
	});
	return this;
}

Server.prototype.addHook = function(prefix, url, cb) {
	let router = new Router();
	router.prefix(`/`+ prefix);
	router.get('/'+url, cb);
	this.app.use(router.routes());	

};
Server.prototype.addRoute = function(route) {
//	console.log('addroute',route)
	this.app
		.use(route.routes())
      	.use(route.allowedMethods({
        	throw: true,
      	}))	      
};
Server.prototype.start = function(port) {
	this.app.listen(port, () => console.log('server started on port',port))
};
export default Server
