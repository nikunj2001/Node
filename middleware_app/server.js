const express = require('express')
const app = express();
const PORT=3000;
const path =require('path')
const fs = require('fs')



app.use((req,res,next)=>{
    var filepath = path.join(__dirname,'static',req.url);
    fs.stat(filepath,(err,fileInfo)=>{
        if(err){
            next();
            return
        }
        if(fileInfo.isFile()){
            res.sendFile(filepath);
        }else{
            next();
        }
    })
})

app.use((req,res)=>{
    res.status(404);
    res.send("File not found")
    })
app.listen(PORT,()=>{
    console.log(`App listenig on ${PORT}`);
})