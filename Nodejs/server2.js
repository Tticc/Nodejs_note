//创建服务器，接收浏览器请求，并根据请求内容打开相应文件
//嗯，原本是与server2Client.js相匹配的，被我改过之后，我不知道了
var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   var req = pathname.substr(1);
   
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   
   // 从文件系统中读取请求的文件内容
   if(pathname=='/'){				//如果输入地址为 http://127.0.0.1:8888/ 打开homepage.html
   	req='homepage.html';
}
   fs.readFile(req, function (err, data) {	//否则打开相应文件
      if (err) {
         console.log(err);
         fs.readFile('index.html',function(error,datas){
         	response.writeHead(404, {'Content-Type': 'text/html'});
         	
        });
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         //response.writeHead(404, {'Content-Type': 'text/html'});
      }else{	         
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // 响应文件内容
         response.write(data.toString());		
      }
      //  发送响应数据
      response.end();
   });   
 
}).listen(8888);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8888/');