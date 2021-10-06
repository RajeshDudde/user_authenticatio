const express=require('express')
var router=express.Router()
var {stu}=require('../model/stu')
var ObjectID=require('mongoose').Types.ObjectId

// get method
router.get('/',(req,res)=>
{
 stu.find((err,docs)=>
 {
     if(!err)
     {
         res.send(docs);
     }
     else
     {
         console.log("error while retriving all records "+JSON.stringify(err,undefined,2))
     }
 })
})

// post method for inserting/creating new record
router.post('/',(req,res)=>
{
    var newrecord=new stu(
    {
        name:req.body.name,
        address:req.body.address,
        dob:req.body.dob,
        email:req.body.email,
        phoneno:req.body.phoneno,
        password:req.body.password
    })
    newrecord.save((err,docs)=>
    {
        if(!err)
     {
         res.send(docs)
     }
     else
     {
         console.log("error while creating new  records "+JSON.stringify(err,undefined,2))
     }
    })
})
// put method is used for update
router.put("/:id",(req,res)=>
{
  if (!ObjectID.isValid(req.params.id))  //req.params.id
  
      return res.status(400).send('No record with given Id:'+req.params.id)
  
  var updaterecord={
    name:req.body.name,
    address:req.body.address,
    dob:req.body.dob,
    email:req.body.email,
    phoneno:req.body.phoneno,
    password:req.body.password,
    }

stu.findByIdAndUpdate(req.params.id,{$set:updaterecord},{new:true},(err,docs)=>
{
    if(!err)
 {
     res.send(docs);
 }
 else
 {
     console.log("error while updating  records "+JSON.stringify(err,undefined,2))
 }
})
})

router.delete("/:id",(req,res)=>
{
    if (!ObjectID.isValid(req.params.id))
  return res.status(400).send('No record with given Id:'+req.params.id)

  stu.findByIdAndRemove(req.params.id,(err,docs)=>
  {
      if(!err)
   {
       res.send(docs);
   }
   else
   {
       console.log("error while deleting  records "+JSON.stringify(err,undefined,2))
   }
  })
})

//25min
module.exports=router;