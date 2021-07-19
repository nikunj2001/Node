const express= require('express')
const route = express.Router();
const accounts = require('./database');


// get request
route.get("/accounts",(req,res)=>{
    res.json({userDAta:accounts});
})

// Post
route.post("/accounts",(req,res)=>{
    const incomingAccount = req.body
    accounts.push(incomingAccount);
    res.json(accounts);
})
// getting with id
route.get("/account/:id",(req,res)=>{
    const accountid= Number(req.params.id);
    const getAccount = accounts.find((account)=>account.id===accountid);
    if(!getAccount){
            res.status(500).send("Account not found");
    }else{
        res.json({userData:[getAccount]})
    }

})

// put 
route.put("/accounts/:id",(req,res)=>{
    const accountID=Number(req.params.id);
    const body= req.body;
    const account = accounts.find(account=>account.id===accountID)
    const index = accounts.indexOf(account)
    if(!account){
        res.status(500).send("Account not found")

    }else{
        const updatedAccount = {...account,...body};
        console.log(updatedAccount);
        accounts[index] = updatedAccount
        res.end();
    }
})

// Delete
route.delete('/accounts/:id',(req,res)=>{
    const accountID = Number(req.params.id)
    const newAccounts = accounts.filter(account=>account.id!==accountID)
    if(!newAccounts){
        res.status(500).send("Account not found")
    }else{
        // accounts= newAccounts;
        res.send(newAccounts)
    }
})
module.exports=route