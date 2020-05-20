

// Write Javascript code here 

var http = require('http'); 
var fs = require('fs'); // to get data from html file 


http.createServer(function (req, res) { 
	res.writeHead(200, { 'Content-Type': 'index/html' }); 

	

}).listen(process.env.PORT || 3000, function () { 
	console.log("SERVER STARTED PORT: 3000"); 
}); 
