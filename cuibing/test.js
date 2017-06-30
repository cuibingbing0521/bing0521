// var http = require('http');
// var fs = require('fs');
// http.createServer(function(request,response){
// 	if(request.url == '/test/index.html'){
// 		fs.readFile('test/index.html','utf-8',function(err,data){
// 			if(err){
// 				console.log(err)
// 			}else{
// 				response.writeHead(200,{"content-type" : "text/html;charset=utf8"})
// 				response.end(data)
// 			}
// 		})
// 	}else if(request.url == '/test/index.css'){
// 		fs.readFile('test/index.css','utf-8',function(err,data){
// 			if(err){
// 				console.log(err)
// 			}else{
// 				response.writeHead(200,{"content-type" : "text/css;charset=utf8"})
// 				response.end(data)
// 			}
// 		})
// 	}else if(request.url == '/test/index.js'){
// 		fs.readFile('test/index.js','utf-8',function(err,data){
// 			if(err){
// 				console.log(err)
// 			}else{
// 				response.writeHead(200,{"content-type" : "text/javascript;charset=utf8"})
// 				response.end(data)
// 			}
// 		})
// 	}else if(request.url == '/test/1994.jpg'){
// 		fs.readFile('test/1994.jpg',function(err,data){
// 			if(err){
// 				console.log(err)
// 			}else{
// 				response.writeHead(200,{"content-type" : "image/jpeg"})
// 				response.end(data)
// 			}
// 		})
// 	}
// }).listen(3000);

var http = require('http');
var fs = require('fs');
http.createServer(function(request,response){
	var url = request.url;
	switch(url){
		case "/test/index.html" :
			fs.readFile('test/index.html','utf-8',function(err,data){
				if(err){
					console.log(err)
				}else{
					response.writeHead(200,{"content-type" : "text/html;charset=utf8"})
					response.end(data)
				}
			})
			break;
		case "/test/index.css" :
			fs.readFile('test/index.css','utf-8',function(err,data){
				if(err){
					console.log(err)
				}else{
					response.writeHead(200,{"content-type" : "text/css;charset=utf8"})
					response.end(data)
				}
			})
			break;
		case "/test/index.js" :
			fs.readFile('test/index.js','utf-8',function(err,data){
				if(err){
					console.log(err)
				}else{
					response.writeHead(200,{"content-type" : "text/javascript;charset=utf8"})
					response.end(data)
				}
			})
			break;
		case "/test/01.jpg" :
			fs.readFile('test/01.jpg',function(err,data){
				if(err){
					console.log(err)
				}else{
					response.writeHead(200,{"content-type" : "image/jpeg"})
					response.end(data)
				}
			})
			break;
	}
}).listen(3000);