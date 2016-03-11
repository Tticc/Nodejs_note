//var buf1 = new Buffer('HELLO,WORLD');//utf-8为默认的编码方式
//这个文件的代码简单地展示了buffer的创建与使用。
var buf = new Buffer(9); 			
var len = buf.write("123456789976543");
console.log(len+" char");
console.log(buf.toString()); //读取缓冲区的数据 toString();
var json = buf.toJSON();
console.log(json);
console.log();
console.log();
var buffer1 = new Buffer('AV');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);	//缓冲区比较

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}
var buff = buf.slice(2,5);	//裁剪缓冲区
console.log(buff.toString());