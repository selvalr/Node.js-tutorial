const http=require('http');
const myModule=require('./ownModul');
//var url=require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(myModule.sayHello());
   
    res.end("hello selva");
}).listen(8080);

/*
http.createServer(function(req,res){
    const queary=url.parse(req.url,true).query;
    res.writeHead(200,{'Content-type':'textx/html'});
    res.write(myModule.sayHello());
    res.write("hello node js");
    res.write("url is"+req.url);
    res.write("name"+queary.name);
    res.end();
}).listen(8080);
*/