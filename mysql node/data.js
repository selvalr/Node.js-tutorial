var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "selva369",
  database:"selva"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*con.query("CREATE DATABASE selva",function(err,result){
    if (err) throw err;
    console.log("database created");
  })*/
  /*
  con.query("CREATE TABLE friend(name VARCHAR(255),age INT(8),village VARCHAR(100))");
  if(err) throw err;
  console.log("table created");
*/
  con.query("INSERT INTO friend VALUES('selva',21,'avr')");
  if(err) throw err;
  console.log("1 inserted");
});
