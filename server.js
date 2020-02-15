/* IMPORTS */
var finalHandler = require ('finalhandler');
var http = require ('http');
var serveStatic = require ('serve-static');



// Serve up the 'src' folder
var serve = serveStatic ('src', {'index': 'index.html'});



// Create the server
var server = http.createServer
(
    function onRequest (request, response)
    {
        serve(request, response, finalHandler(request, response));
    }
);



// Listen to the port
server.listen(3000);