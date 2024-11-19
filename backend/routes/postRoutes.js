const express = require('express')

const router = express.Router()

// Get all posts

router.get('/',(req,res)=>{
    res.json({mssg:"Get all posts"})
})

// Get a single post
router.get('/:id',(req,res)=>{
    res.json({mssg:`Get post with id ${req.params.id}`})
})
module.exports = router