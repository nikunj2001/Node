const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')
const PORT=3000;
const cookies= require("cookie-parser");
app.set("views",path.join(__dirname,"views"))


app.use(session({
        secret:"mysecret",
        resave:true,
        saveUninitialized:true
}))
app.use(cookies()); 
let users={
    name:"Nikunj",
    age:20
}
app.get("/",(req,res)=>{
    res.send("Cookies Tutorial");
});
app.get("/setuser",(req,res)=>{
        res.cookie("userData",users);
        res.send("userdata added to cookie")
});
app.get("/getuser",(req,res)=>{
    res.send(req.cookies)
})
app.get("/logout",(req,res)=>{
    res.clearCookie("userData");
    res.send("user logged out");
})


app.listen(PORT,()=>{
    console.log(`App listening on Port ${PORT}`);
})

