
let http = require('http'); // imports the http module that is shipped together with Node.js 
//when we install it and makes it accessible through the variable http
let url = require('url');


// http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-type": "text/plain" });
//     response.write("Jimmy You made your First Server");
//     response.end();
// }).listen(8000);

// A function to wrap our server functionality so that we can export it
let start = function(route,handle){
function onRequest(request, response){
    // Extracting the pathname from the url requested
    let pathname = url.parse(request.url).pathname
    console.log('Request for' +pathname + ' Has been Received');

    //passint the pathname as a parameter to the route function 
    route(handle,pathname);
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Server Creation Complete ");
    response.write('We are live!!');
    response.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server has Started!")
}

exports.start = start;



