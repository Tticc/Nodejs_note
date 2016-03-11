//读取文件并输出于控制台。
//为什么要使用buffer呢？

var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件：");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});


//var fs = require("fs");
//
//// 异步读取
//fs.readFile('input.txt', function (err, data) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log("异步读取:" + data.toString());
//});
//
//// 同步读取
//var data = fs.readFileSync('input.txt');
//console.log("同步读取:" + data);
//
//console.log("程序执行完毕。");

//var fs = require("fs");
//
//console.log("准备打开文件！");
//fs.stat('input.txt', function (err, data) {
//   if (err) {
//       return console.error(err);
//   }
//   console.log(data);
//   console.log("读取文件信息成功！");
//   
//   // 检测文件类型
//   console.log("是否为文件(isFile) ? " + data.isFile());
//   console.log("是否为目录(isDirectory) ? " + data.isDirectory());    
//});

