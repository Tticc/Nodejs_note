//event1.js文件
//此文件主要展示了event.once() 和 event.on()的区别。event.once()绑定函数中，里面的事件所绑定的函数
//无论如何都只会被调用一次，不像on。
var EventEmitter = require('events');
var event = new EventEmitter.EventEmitter();
event.on('some_event',function(){
    console.log('some_event 事件 event');
});
//只会调用一次
event.once('some_event_once',function(){
    console.log('some_event_once 事件 event');
});
setTimeout(function(){
    event.emit('some_event_once');
    event.emit('some_event');
},1000);
setTimeout(function(){
    event.emit('some_event_once');
    event.emit('some_event');
},2000);
setTimeout(function(){
    event.emit('some_event_once');
    event.emit('some_event');
},3000);


