//管道。将input.txt 文件中的数据写入 output.txt 中

var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.doc');

// 管道读写操作
// input.txt >> output.txt
readerStream.pipe(writerStream);

console.log("程序执行完毕");
