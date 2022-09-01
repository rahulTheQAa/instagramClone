const express = require('express')
const router =express.Router()
const mongoose = require('mongoose')
const User =mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const {JWT_SECRET} = require('../Keys')
const requireLogin = require('../middleware/requireLogin')


router.post('/signup',(req,res)=>{
 const {name,email,password} = req.body
 if(!email || !password || !name){
  return res.status(422).json({error:"please add all the fields"})
 }
 User.findOne({email:email})
 .then((savedUser)=>{
   if(savedUser){
    return res.status(422).json({error:"user already exists with the given email"})
   }
   bcrypt.hash(password,12)
   .then((hashedpassword)=>{
     const user = new User({
       name,
       password:hashedpassword,
       email,
     })
       user.save()
       .then(User=>{
         res.json({message:"user Saved"})
          })
        .catch(err=>{
          console.log(err)
        })
   })

 })
 .catch(err=>{
  console.log(err)
  })
})
router.post('/login',(req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
   return res.status(422).json({error:"please fill all the fields"})
  }
  User.findOne({email:email})
  .then((savedUser)=>{
    if(!savedUser){
      return res.status(422).json({error:"invalid credentials"})
      }
      bcrypt.compare(password,savedUser.password)
    .then(doMatch=>{
      if(doMatch){
       //res.json({message:"Successfull"})
        const token =jwt.sign({_id:savedUser._id},JWT_SECRET)
        const {_id,name,email} = savedUser
        res.json({token,user:{_id,name,email}})

      }
      else{ 
        return res.status(422).json({error:"Password is not Correct"})
      }
    })
    .catch(err=>{
      console.log(err)
      })
  }) 
  .catch(err=>{
    console.log(err)
    })
})
module.exports = router