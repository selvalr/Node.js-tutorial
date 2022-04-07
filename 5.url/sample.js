var http=require("http");
var fs=require("fs");
var url=require("url");

http.createServer(function(req,res){
   var weblink=url.parse(req.url,true);
   var pathna="."+weblink.pathname;
   fs.readFile(pathna,function(err,data)
   {
       if(err){
           res.writeHead(404,{'Content-type':'text/html'})
           return res.end("404 error")
       }
       res.writeHead(200,{'Content-type':'text/html'});
       res.write(data);
       res.end();
   });

}).listen(8080);