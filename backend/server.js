require('dotenv').config()
const express = require('express');
const postsRoutes = require('./routes/postRoutes')
const app=express();

// middleware
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next();
})

app.use('/api/post',postsRoutes)


app.listen(process.env.PORT,()=>{
    console.log("server is running on port 4000");
})