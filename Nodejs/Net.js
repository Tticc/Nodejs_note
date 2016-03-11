//Net.js 与 NetClient.js
//Net.js 作为服务器端


var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
//   connection.on('end', function() {
//      console.log('客户端关闭连接');
//   });
   connection.on('data',function(data){
   	console.log("you said " + data +"\n\n");
   	//connection.write("you saie "+data +"\n\n");
  });
   //connection.write('Hello World!\r\n');
   //connection.pipe(connection);
   //connection.end();
});
server.listen(8080, function() { 
  console.log('server is listening at 8888');
});
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

//var net = require('net');
//var data = 'xx';
//var server = net.createServer(function(connection) { 
//   console.log('client connected');
//   connection.on('end',function() {
//      console.log('客户端未关闭连接');
//      //console.log(data);
//   });
//   connection.write('Hello World!\r\n');
//   connection.pipe(connection);
//   connection.end();
//	 connection.on('end', function() {
//   console.log('client shut down!');
//});
//});
//server.listen(8080, function() {
//  console.log('server is listening at 8080');
//})
