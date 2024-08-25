const express = require("express");
const mongoose=require("mongoose");

const route=express.Router();

route.post("/bhfl",(req,res)=>{

    numbers=[]
    alpha=[]
    hla=[]
    const arr=req.body.data;
    arr.forEach(element => {
        if(!isNaN(parseInt(element))) numbers.push(element);
        else alpha.push(element);
    });

    h='a'
    let flag=false;
    alpha.forEach(element=>{
        if(element=='a') flag=true;
        if(element>='a' && element<='z'){
            if(h<element) h=element;
        }
    })
    if(flag || h!='a') hla.push(h);
    const data={
        "is_success": true,
        "user_id": "leelasumanth_dharmana_06122003",
         "email": "leelasumanth999@gmail.com",
        "rollnumber":"21BCE9002",
        "numbers": numbers,
        "alphabets": alpha,
        "highest_lowercase_alphabet":hla
    }
    return res.json(data);

})

route.get('/bhfl',(req,res)=>{
    const data={
        "operation_code":1
    }
    return res.json(data);
})


module.exports=route;