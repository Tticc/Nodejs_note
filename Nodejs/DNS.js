//域名解析系统，通过lookup方法将域名解析为ip地址。

var dns = require('dns');
var events = require('events');
var emitter = new events.EventEmitter();

dns.lookup('www.githubsd.com', function onLookup(err, address, family) {
   console.log('ip 地址:', address);
   dns.reverse(address, function (err, hostnames) {
   if (err) {
      console.log(err.stack);
   }
   console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
   });  
});

emitter.emit('error',new Error("系统即将崩溃！"));