var express= require('express');
var router = express.Router();
const credential={email:"admin@gmail.com",password:123};
// 
router.post('/login',(req,res)=>{
    if(req.body.email==credential.email && req.body.password==credential.password){
        req.session.user=req.body.email;
        res.redirect("/route/dashboard");
        // res.end("Login done");
    }else{
            res.end("Invalid username")
    }
})

router.get("/dashboard",(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send("unauthorised user")
    }
})
router.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.render("base",{title:"login page",logout:"Logged out"})
            }
    })
})


module.exports=router;