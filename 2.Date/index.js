let http=require('http');
let dt=require('./myDate');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("hai india"+dt.myDate());
    
    res.end();

}).listen(8080);