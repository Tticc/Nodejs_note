//通过外部接口实现不同功能模块的分离，此文件类似于具体方法，index.js则类似于main函数
//index.js router.js and server1.js  start index.js
//运行index.js文件
//此文件用于打开服务器

var http = require('http');

var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("\"Request for +\" " + pathname + " \"+ received.\"");
    //console.log(url.parse(request.url,true).query.name);
    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
exports.start = start;


//http.createServer(function (request, response) {
//
//	// 发送 HTTP 头部 
//	// HTTP 状态值: 200 : OK
//	// 内容类型: text/plain
//	response.writeHead(200, {'Content-Type': 'text/plain'});
//
//	// 发送响应数据 "Hello World"
//	response.end('Hello World\n');
//}).listen(8888);
//
//// 终端打印如下信息
//console.log('Server running at http://127.0.0.1:8888/');