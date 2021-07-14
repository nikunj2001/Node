const http = require('http');
const hostname = "127.0.0.1";
const port  = 3000;
const axios= require('axios');
axios.post("https://reqres.in/api/users").then(res=>{
    console.log(`Status code :${res.status}`);
    console.log(`Body :${res.data}`);
})

// request

// http.get('http://api.open-notify.org/iss-now.json',(res)=>{
//     let data="";
//     res.on('data',chunk=>{
//         data+=chunk
//     });

//     res.on("end",()=>{
//         console.log(data);
//     })
// })

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("welcome to Http Server");
})
server.listen(port,hostname,()=>{
    console.log(`listeing on port ${port}`);
})