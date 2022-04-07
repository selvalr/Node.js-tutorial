const os=require('os');
var user=os.userInfo();
console.log(user);

const fs=require('fs');
fs.appendFile('hello.txt','hai.js');