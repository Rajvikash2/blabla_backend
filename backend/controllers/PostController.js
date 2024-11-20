const Post = require('../models/PostModel')
const mongoose = require('mongoose')

// Anonymous username generator

const generateAnonymousUsername = () =>
{
    const adjectives = ["Cool", "Happy", "Mysterious", "Witty"];
  const nouns = ["Penguin", "Cat", "Cactus", "Ninja"];
  
  return `${adjectives[Math.floor(Math.random()*adjectives.length)]}${nouns[Math.floor(Math.random()*nouns.length)]}${Math.floor(1000+Math.random()*9000)}`;
}



// Get all posts

const getAllPosts = async (req,res)=>{
    try{
        const posts = await Post.find().sort({createdAt:-1})
        res.status(200).json(posts);
    }
    catch(error)
    {
        res.status(404).json({message:"Server error",error:error.message})
    }
};

// Get a single post

const getApost = async (req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({message:"Invalid post Id"})
        const post = await Post.findById(id);
        if(!post){
            res.status(404).json({message:"Post not found"})
        }
        res.status(200).json(post);
    }
    catch(error){
        res.status(500).json({message:"Server error",error:error.message})
    }
    
}

// Create a post

const createPost = async (req,res)=>{
    try{
        const { title,content} = req.body;
        if(!title || !content)
            return res.status(400).json({message:"Title and content are required"})
        const newPost = await Post.create(
            {
                title,
                content,
                anonymousUsername: generateAnonymousUsername()
            }
        )
        res.status(201).json(newPost)
    }
    catch(error){
        res.status(500).json({message:"Server error",error:error.message})
    }
}



module.exports={
    getAllPosts,
    getApost,
    createPost
}
