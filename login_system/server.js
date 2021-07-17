const express = require('express')
const app = express();
const PORT =3000;
const session = require('express-session')
const bodyparser = require('body-parser')
const path = require('path');
const { v4:uuidv4 }=require('uuid');
const router = require('./router')
// app.use(bodyparser.json) 
app.use(bodyparser.urlencoded({extended:true}))
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))
app.set("view engine","ejs")
// // Static assest

app.use('/static',express.static(path.join(__dirname,"public")))
app.use("/route",router)

app.get("/",(req,res)=>{
    res.render('base');
})


app.listen(PORT,()=>{
    console.log(`listeing on port ${PORT}`);
})
