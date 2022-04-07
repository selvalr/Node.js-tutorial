const { log } = require('console');
const fs=require('fs');
const myadd=require('./add');
const yargs=require('yargs');


console.log(process.argv[2])
console.log(yargs.argv);

var argv=yargs.argv;
var comand=argv._[0];
if(comand==='create'){myadd.createNotes(yargs.tittle,yargs.body);

}
else if(comand ==='read'){
    console.log('reading');
}else if(comand==='delete'){
    console.log('deleted');
}else{
    console.log('content not found');
}