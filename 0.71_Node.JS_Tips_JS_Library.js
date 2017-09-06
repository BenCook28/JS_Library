// non-blocking example
fs.readFile('/etc/hosts', function(err, contents){
    console.log(contents);
});

// calback alternative syntax
fs.readFile('/etc/hosts', function(err, contents){
    console.log(contents);
});

console.log('Doing something else');

// same as above
var callback = function(err, contents){
    console.log(contents);
}

fs.readFile('/etc/hosts', callback);
// server example

var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write("Hello, world!"); // response body
    response.end();
}).listen(8080);

console.log('Listening on port 8080...');

// to run the server
node hello.js 
curl http://localhost:8080

// event loop alternative
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write("Hello, world!"); // response body
    response.end();
}).listen(8080, function(){
    console.log('Listening on port 8080...');
});

// set timeout for long running processes
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write("Server is running");
    setTimeout(function(){
        response.write("Server is done");
        response.end();
    }, 5000); // five seconds
}).listen(8080);