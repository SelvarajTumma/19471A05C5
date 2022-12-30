var express = require('express');
var app = express();
const fetch=require('node-fetch');
var valid=require('valid-url');
app.get('/?numbers', function (req, res) {
   c=req.query.url;
   var i=0;
   for(const url of c){
    if(valid.isUri(url)){
        continue;
    }
    else{
        c.splice(i,1);
    }   
   }
   for(const i of c){
        fetch(i,{method:'Get'}).then(res=>res.json()).then((json)=>{
            console.log(json)
        });
    }
   res.send('seen');
})
app.get('localhost:8090/primes',function(req,res){
    console.log(res);
})
var server = app.listen(8081, function () {
  console.log('Hello')
})