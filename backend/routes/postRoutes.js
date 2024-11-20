const express = require('express')
const{
    getAllPosts,
    getApost,
    createPost,
} = require('../controllers/PostController')


const router = express.Router()

// Get all posts

router.get('/',getAllPosts)

// Get a single post
router.get('/:id',getApost)

// Post 
router.post('/',createPost)

// // Comment on a post
// router.post('/:id/comment',commentOnPost)


module.exports = router