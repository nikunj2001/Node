const express= require('express')
const app =express();
const dotenv = require('dotenv')
const PORT= process.env.PORT || 3000;
const morgan = require('morgan')
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')
dotenv.config({path:'config.env'})

// Log request
app.use(morgan('tiny'))
// Connect DB
connectDB();
// Pass request to bodyparser

app.use(bodyparser.urlencoded({extended:true}))
// Set view Engine
app.set('view engine','ejs');
// app.set()
// Load assests
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})
