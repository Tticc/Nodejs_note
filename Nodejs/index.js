//通过外部接口实现不同功能模块的分离
//index.js router.js and server1.js  start index.js
//运行此文件
var server = require("./server1");
var router = require("./router");

server.start(router.route);

