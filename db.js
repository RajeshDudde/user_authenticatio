const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/student',{useNewUrlParser:true,useUnifiedTopology:true},
err=>
{
    if(!err)
    {
        console.log("mongodb connected")
    }
    else
    {
        console.log("error while connecting db:"+JSON.stringify(err,undefined,2))
    }
})