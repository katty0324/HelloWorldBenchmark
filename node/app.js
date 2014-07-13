var http = require('http');
 
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<!doctype html><html><body>Hello Node.js!</body></html>');
}).listen(8080);
