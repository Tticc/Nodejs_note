//������������������������󣬲������������ݴ���Ӧ�ļ�
//�ţ�ԭ������server2Client.js��ƥ��ģ����ҸĹ�֮���Ҳ�֪����
var http = require('http');
var fs = require('fs');
var url = require('url');

// ����������
http.createServer( function (request, response) {  
   // �������󣬰����ļ���
   var pathname = url.parse(request.url).pathname;
   var req = pathname.substr(1);
   
   // ���������ļ���
   console.log("Request for " + pathname + " received.");
   
   // ���ļ�ϵͳ�ж�ȡ������ļ�����
   if(pathname=='/'){				//��������ַΪ http://127.0.0.1:8888/ ��homepage.html
   	req='homepage.html';
}
   fs.readFile(req, function (err, data) {	//�������Ӧ�ļ�
      if (err) {
         console.log(err);
         fs.readFile('index.html',function(error,datas){
         	response.writeHead(404, {'Content-Type': 'text/html'});
         	
        });
         // HTTP ״̬��: 404 : NOT FOUND
         // Content Type: text/plain
         //response.writeHead(404, {'Content-Type': 'text/html'});
      }else{	         
         // HTTP ״̬��: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // ��Ӧ�ļ�����
         response.write(data.toString());		
      }
      //  ������Ӧ����
      response.end();
   });   
 
}).listen(8888);

// ����̨�����������Ϣ
console.log('Server running at http://127.0.0.1:8888/');