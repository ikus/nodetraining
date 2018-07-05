var http = require('http');

function onReruest(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('Hello World');
	response.end();

}

http.createServer(onReruest).listen(8000);