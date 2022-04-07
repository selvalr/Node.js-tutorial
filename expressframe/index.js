const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('welcome');

});
app.get('/gallery',(req,res)=>{
    res.send('Gallery Page')
})

app.listen(8000);