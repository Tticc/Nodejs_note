//hello.js 
//将此文件做成公共模块，供其它模块调用，如 mainn.js
//其中function Hello相当于类 故而在方法被调用前需要将其实例化

function Hello() { 
	var name; 
	this.setName = function(thyName) { 
		name = thyName; 
	}; 
	this.sayHello = function() { 
		console.log('Hello ' + name); 
	}; 
}; 
module.exports = Hello;
