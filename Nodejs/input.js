//将input.txt文件内容打印到控制台中

var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
 //  data += chunk;
 console.log(chunk);
   //console.log('now run the function');
});

readerStream.on('end',function(){
   //console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

//readerStream.emit('data');

console.log("程序执行完毕");


