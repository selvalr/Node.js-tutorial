var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbname=db.db("first");
   /*dbname.collection("student").find({}).toArray(function(err,res){
        if (err) throw err;
        console.log(res);

        db.close();
    });
        */
/*
    dbname.collection("student").find({}, { projection: { _id: 0, name: 1, age: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });

*/
      const query = {first_name:/^K/};

      // Find by query & regular expression
      dbname.collection("student").find(query).toArray((err,res)=>{
          if(err) throw err;
          console.log(res);
      });

});