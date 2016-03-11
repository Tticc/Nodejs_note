//这是网上找来的示例代码 与TCP.js 共同构成一组B/S
//这里构建了一个客户端，用来访问TCP.js构成的服务器端。
//主要功能是向服务器端发送一条信息并接受从服务器端返回的信息。


var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8080;
var client = new net.Socket();
client.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据 
    client.write('I am Chuck Norris!');
});
// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', function(data) {
    console.log('DATA: ' + data);
    // 完全关闭连接
    client.destroy();
});
// 为客户端添加“close”事件处理函数 关闭客户端
client.on('close', function() {
    console.log('Connection closed');
});