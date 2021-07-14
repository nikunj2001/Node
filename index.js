// Working with files
const fs = require('fs');
fs.readFile("learnings.txt",'utf8',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})
const data = fs.readFileSync('learnings.txt',{encoding:"utf-8",flag:'r'});
console.log(data);


fs.stat('learnings.txt',(err,stats)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(stats.isFile());
console.log(stats.size);

})

const content =[{
    type:"Node Appliation"
},];