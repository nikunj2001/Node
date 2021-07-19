const express= require('express')
const app =express();
const dotenv = require('dotenv')
const PORT= process.env.PORT || 3000;
const morgan = require('morgan')
const bodyparser = require('body-parser');
const path = require('path');
dotenv.config({path:'config.env'})

// Log request
app.use(morgan('tiny'))
// Pass request to bodyparser

app.use(bodyparser.urlencoded({extended:true}))
// Set view Engine
app.set('view engine','ejs');
// app.set()
// Load assests
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))
app.get('/',(req,res)=>{
    res.render('index.ejs')
})


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})
