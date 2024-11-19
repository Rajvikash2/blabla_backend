require('dotenv').config()
const express = require('express');
const postsRoutes = require('./routes/postRoutes')
const app=express();
const mongoose = require('mongoose');

// middleware
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next();
})

app.use('/api/post',postsRoutes)

// Connect to DB

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(" coonected to db & server is running on port",process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log("Failed to connect",error);
    })


