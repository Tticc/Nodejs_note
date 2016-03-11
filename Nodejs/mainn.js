//main.js 调用hello.js模块中的方法
var Hello = require('./hello'); //引入模块（注意路径）
hello = new Hello(); 			//实例化
hello.setName('BYVoid'); 
hello.sayHello(); 

