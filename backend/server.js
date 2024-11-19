require('dotenv').config()
const express = require('express');

const app=express();

// middleware

app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next();
})

app.get('/',(req,res)=>{
    res.json({mssg:'Hey raj'})
})

app.listen(process.env.PORT,()=>{
    console.log("server is running on port 4000");
})