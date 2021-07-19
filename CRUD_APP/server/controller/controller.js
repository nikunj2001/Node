var userdb = require('../model/model')


exports.create=(req,res)=>{
    
}
// retrive and return
exports.create=(req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message:"Cantent cannot be empty"})
        return;
    }
    // new user
    const user = new userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
    // save user in bd
    user
        .save(user)
        .then(data=>{
            res.send(data)
        }).catch(err=>res.status(500).send({
            message:err.message ||"some error occured while creating a db"
        }))
}


exports.find=(req,res)=>{

}

// update

exports.update=(req,res)=>{

}

// Delete

exports.delete=(req,res)=>{

}