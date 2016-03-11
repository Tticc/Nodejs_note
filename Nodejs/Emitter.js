//事件的绑定与触发。
//该文件主要展示了事件的绑定以及触发，还有就是统计某一事件绑定的函数个数。

var events = require("events");
var eventEmitter = new events.EventEmitter();
var print = function print(){			//函数定义（在下面会与事件 em 绑定）;
    console.log("this is the print funcion");
}
var prints = function prints(){console.log('prints function');}
eventEmitter.on('em',prints);
eventEmitter.on("em",print);		  //绑定事件 em 和 动作（函数） print;
eventEmitter.emit("em");
//eventEmitter.emit('error');
//var xx = require('events').EventEmitter.listenerCount(eventEmitter,'em');
var xx = events.EventEmitter.listenerCount(eventEmitter,'em');	//统计与事件 em 绑定的函数的个数
console.log(xx+" count");
console.log('program done!');

