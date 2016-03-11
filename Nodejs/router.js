//通过外部接口实现不同功能模块的分离
//index.js router.js and server1.js  start index.js
//运行index.js文件
//接收参数，打印信息，在server.js中被调用
function route(pathname) {
  console.log("About to route a request for " + pathname);
}

exports.route = route;