const express=require('express');

var app=express();

const bodyParser=require("body-parser");
const cors=require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const route=require('./Route')
app.use("/",route);


app.listen(4000,()=>console.log("Server started at 4000"));
