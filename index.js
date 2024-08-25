const express=require('express');

var app=express();

const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require('cors');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://leelasumanth999:11111@cluster0.o97cm.mongodb.net/JSONDATA");

var db=mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const route=require('./Route')
app.use("/",route);
db.on('open',()=>console.log("Connected to DB"));
db.on('error',()=>console.log("Error Occured"));

app.listen(4000,()=>console.log("Server started at 4000"));