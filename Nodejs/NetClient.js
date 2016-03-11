//Net.js 与 NetClient.js
//NetClient.js 作为客户端

var net = require('net');
var client = new net.Socket();
client.connect({port: 8888}, function() {
   console.log('连接到服务器！');  
   //client.write("I say love you");
});

//client.on('end', function(data) {
//   console.log(data.toString());
//   
//   client.end();
//   //setTimeout(client.end(),3000);
//   //setTimeout(console.log('断开与服务器的连接'),3000);
//});
client.on('data', function(data) {
    console.log('DATA: ' + data);
    // 完全关闭连接
    client.destroy();
});
//client.end();
setTimeout(function(){client.end()},2000);		//两秒后断开连接
client.on('end', function() { 
   console.log('断开与服务器的连接');
});