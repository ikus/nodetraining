var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');
function onRequest(request,response){
	module2.myFunction();
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write(module2.myVariable);
	response.end();

}

http.createServer(onRequest).listen(8000);