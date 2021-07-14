const http = require('http')
const index=(req,res)=>{
        
}


const routes={
    '/':function index(req,res){
            res.writeHead(200);
        res.end("Node Routing")
    },
    '/aboutus':function aboutus(req,res){
    res.end("this is about page");
}
}
http.createServer((req,res) =>{
    if(req.url in routes){
        return routes[req.url](req,res);
    }
    if(req.url=='/aboutus'){
        return aboutus(req,res);;
    }
}).listen(8000);

