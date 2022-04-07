var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbname=db.db("first");
var multiple=[
    {name:'karthi',age:21},
    {name:'bass', age:34},
    {name:'ravi',age:28}
];
   dbname.collection("student").insertMany(multiple,function(err,res){
        if (err) throw err;
        console.log("many value inserted");

        db.close();
    });
        

});