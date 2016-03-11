//JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。
//JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。

//该文件主要介绍了nodejs 的inherits函数。
//通过该函数，子函数可以继承父函数的方法。与类相似。
//以及 inspect 方法

var util = require('util'); 
function Base() { 
	this.name = 'base'; 								//属性不可继承
	this.base = 1991; 
	this.sayHello = function() { 				//不可继承方法
	console.log('Hello ' + this.name); 
	}; 
} 
Base.prototype.showName = function() { 	//可继承的方法
	console.log(this.name);
}; 
Base.prototype.saySomething = function(){	//可继承的方法
	console.log(this.name+" selfish");
}
function Sub() { 
	this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
objSub.saySomething(); 
console.log(objSub); 


//var util = require('util'); 
//function Person() { 
//	this.age= 34;
//	this.name = 'byvoid'; 
//	this.toString = function() { 
//	return this.name; 
//	}; 
//} 
//var obj = new Person(); 
//console.log();
//console.log(util.inspect(obj)); 
//console.log();
//console.log();
//console.log(util.inspect(obj, true)); 