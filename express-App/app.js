const express = require('express');
const app = express();
const path = require('path');
const PORT=3000;

app.set("views",path.join(__dirname,"views"))
app.set("view engine","pug");

app.use(express.urlencoded({
    extended:true
}))
app.get("/",(req,res)=>{
    res.render('index',{title:"Form handling"})
})
app.post("/form_submit",(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    res.end(`username is ${username} and email is ${email}`)

})

app.listen(PORT,()=>{
    console.log(`App listening on Port ${PORT}`);
})