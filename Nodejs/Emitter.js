//�¼��İ��봥����
//���ļ���Ҫչʾ���¼��İ��Լ����������о���ͳ��ĳһ�¼��󶨵ĺ���������

var events = require("events");
var eventEmitter = new events.EventEmitter();
var print = function print(){			//�������壨����������¼� em �󶨣�;
    console.log("this is the print funcion");
}
var prints = function prints(){console.log('prints function');}
eventEmitter.on('em',prints);
eventEmitter.on("em",print);		  //���¼� em �� ������������ print;
eventEmitter.emit("em");
//eventEmitter.emit('error');
//var xx = require('events').EventEmitter.listenerCount(eventEmitter,'em');
var xx = events.EventEmitter.listenerCount(eventEmitter,'em');	//ͳ�����¼� em �󶨵ĺ����ĸ���
console.log(xx+" count");
console.log('program done!');

