const express = require('express')
const app = express();
const morgan = require('morgan')
const { v4: uuidv4 } = require('uuid');
const port = 3000;
const fs = require('fs')
const path = require('path')
const assgnid=(req,res,next)=>{
    req.id=uuidv4();
    next()
}

morgan.token("param",function(req,res,param){
    return "userToken";

})

morgan.token('id',function getid(req){
    return req.id
})
app.use(assgnid)
let accessLogString = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})



app.use(morgan(':id:param:  method:status:url'))
app.use(morgan(':id:param:  method:status:url',{stream:accessLogString}))
// app.use(':id:param:  method:status:url',{stream:accessLogString})
app.get("/",(req,res)=>{
    res.send("File")
})



app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})