const mongoose=require('mongoose');
var stu=mongoose.model('stu',
{
      name:{type:String},
      address:{type:String},
      dob:{type:Date},
      email:{type:String},
      phoneno:{type:Number},
      password:{type:String},

})
module.exports={stu}