const mongoose = require('mongoose');
const connectDB = async()=>{
    try {
        // MongoBD connection String
        const con = await mongoose.connect('mongodb+srv://nikunj:nikunj@cluster0.n5t54.mongodb.net/users?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true})
        console.log(`MonogDB connected ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;