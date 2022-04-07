var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbname=db.db("first");

    dbname.createCollection("student",function(err,res){
        if (err) throw err;
        console.log("collection created");

        db.close();
    });
        

});