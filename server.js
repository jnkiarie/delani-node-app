
let http = require('http'); // imports the http module that is shipped together with Node.js 
//when we install it and makes it accessible through the variable http


http.createServer(function (request, response) {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write("Jimmy You made your First Server");
    response.end();
}).listen(8000);

