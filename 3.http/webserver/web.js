var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    if(req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'});
        res.write("<html><body><p>hekko home</p></body></html>");
        res.end();  
    }
    else if(req.url=="/home"){

        res.writeHead(200,{'content-type':'text/html'});
        res.write("<html><body><p>home</p></body><html>");
        res.end();
    }
    else if(req.url=="/about"){

        res.writeHead(200,{'content-type':'text/html'});
        res.write("<html><body><p>abou</p></body><html>");
        res.end();
    }
    else
    {
        res.end("not web");
    }
}).listen(8080)