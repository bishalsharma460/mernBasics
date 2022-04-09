const express = require('express');

const http = require('http'); 
const port =    8000;
// const server = http.createServer((req,res) =>{
//     res.write("connected");
//     console.log(server);
// })
// server.listen(port);
// //console.log(http.METHODS);
// // get
// http.createServer((req,res)=>{
//     console.log(req.url);
//     if(req.url=='/h'){
//         res.write('i am home page ')
//         res.end();
//     }
//   else  if(req.url=='/profile'){
//         res.write('this is profile ');
//         res.end();
//     }
   
// }).listen(port,()=>{
//     console.log('our server started');
// })

http.createServer((req,res)=>{
    if(req.url == "/profile"){
        res.write(JSON.stringify([{
            "name":"someone",
            "address": "kathmandu"
        }]))
        res.end();
    }

    else if(req.url == "/home"){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
}).listen(port,()=>{
   
});