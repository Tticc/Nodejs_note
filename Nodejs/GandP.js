//GET和POST请求
// http://localhost:8888/html?name=dji&email=ss 会将地址拆分输出与
//querystring 有什么用呢?

var http = require('http');
var querystring = require('querystring');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    var post = '';    //定义了一个post变量，用于暂存请求体的信息
    var rUrl = req.url;	//获取请求url
    var saves = url.parse(rUrl,true);//拆分url 并且要有参数ture，否则无法拆分请求的名值对。
    console.log();
    console.log("**********************************************************************");
		console.log(saves);
		console.log("**********************************************************************");
		console.log();
		console.log('search: ' + saves.search);
		console.log('name: ' + saves.query.name);	//通过名来获取对应值
		//res.write('name: ' + saves.query.name);	//通过名来获取对应值
		console.log('email: ' + saves.query.email);//通过名来获取对应值
		console.log('pathname: ' + saves.pathname);
    req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        post += chunk;
    });
    req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        post = querystring.parse(req.url);
        res.end(util.inspect(post));
    });

    console.log(post);
}).listen(8888);
console.log('Server running at http://localhost:8888/');
