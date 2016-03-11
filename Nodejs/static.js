//访问静态文件。
//当访问 http://127.0.0.1:8888/ 时输出hello world
//且此时根目录为 pic 文件夹。

var express = require('express');
var app = express();

app.use(express.static('pic'));  //pic 为存放图片的文件夹 此时pic文件夹在该文件的根目录下 http://127.0.0.1:8888/static.jpg 可访问

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})