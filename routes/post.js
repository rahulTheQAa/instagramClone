const express = require('express')
const router =express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const { populate } = require('../models/post')
const Post = require('../models/post')

router.get('/allpost',requireLogin,(req,res)=>{
    Post.find()
    .populate("postedBy")
    .then(post=>{
        res.json({post})
    })
    .catch(err=>{
        console.log(err)
   
    })

})

router.post('/createpost',requireLogin,(req,res)=>{
 const {title,body,pic} = req.body
 if (!title || !body || !pic){
    return res.status(422).json({error:"please add all the fields"})
    }

    const post = new Post({
        title,
        body,
        photo:pic,
        postedBy:req.User
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})



module.exports =router