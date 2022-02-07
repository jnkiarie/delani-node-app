let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandlers');

let handle = {};
handle["/"] = requestHandlers.index;
handle["/index.html"] = requestHandlers.index;
handle["/portfolio.html"] = requestHandlers.portfolio;

exports.handle = handle;
server.start(router.route, handle);