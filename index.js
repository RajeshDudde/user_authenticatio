require('./db');
const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors')

var postmes=require('./controler/messagecontrol');
var app=express();
app.use(bodyparser.json());
app.use(cors({origin:'http://localhost:3000'}))
app.listen(4000,()=>console.log("server started at port 4000"));

app.use('/stu',postmes);