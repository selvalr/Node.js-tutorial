var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("first");
    var query={age:22};
    var newvalue={$set:{name:"selva",age:23}}
    dbo.collection("student").updateOne(query,newvalue,function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection updated");
      db.close();
    });
  });