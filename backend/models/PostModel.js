const mongoose = require('mongoose');

const Schema = mongoose.Schema

// Comment Schema

const commentSchema = new Schema({
    text:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})

// Post Schema

const postSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    anonymousUsername:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    comments:[commentSchema],
});

module.exports = mongoose.model('Post',postSchema)