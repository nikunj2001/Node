const express = require('express')
const app = express();
const route= require('./route')
const bodyparser=require('body-parser')


app.use(bodyparser.urlencoded({extended:false}))
const PORT = 3000;
app.use("/api",route);
app.get("/",(req,res)=>{
    res.send("HELOO FROM HOME ROUTE")
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})