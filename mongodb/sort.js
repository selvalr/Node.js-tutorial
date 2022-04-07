var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log("conntect");
    var dbo=db.db("first");
    var query={name:1};
    dbo.collection("student").find().sort(query).toArray(function(err,res){
        if (err) throw err;
        console.log(res);
        db.close();
    });
    
});