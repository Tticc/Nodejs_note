//express_demo.js 文件
//express示例文件，这里主要是展示了文件下载功能。
//运行此文件，然后在浏览器中输入 http://localhost:8888/somepage 浏览器会下载 H:/Nodejs/html/download.txt 文件
//输入 http://localhost:8888 则会显示 hello world 
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('<h2>Hello World</h2>'); //只能有一个send 貌似
})
app.get('/somepage',function(req,res){
	res.download('/Nodejs/html/download.txt');	 //下载文件
	console.log('获取请求路径: ' + req.path);
	console.log('获取协议类型: ' + req.protocol);
	console.log('获取URL的查询参数串: ' + req.query);
	console.log('主机名和地址：' + req.hostname); 
	console.log('获取当前匹配的路由: ' + req.route);
	console.log('获取子域名: ' + req.subdomains);
	//当注释掉send和sendFile后能够下载文件，否则不能，为什么呢
	//res.send('<h2>somepage</h2>welcome to this page!');
	//res.sendFile('/Nodejs/index.html'); //绝对路径H:/Nodejs/index.html 不能有两个send吗？ 
	
	
	});
var server = app.listen(8888, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})