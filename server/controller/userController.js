const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
// register a new user
// method: POST
// access: Public
const registerUser = asyncHandler(
    async (req, res) => {
        const {username, email, password} = req.body
        if(!username || !email || !password){
            res.status(400)
            throw new Error('Please add all fields')
        }

        //check if user exists 
        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error('User already exists')
        }
        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)
        // create user
        const user = await User.create({
            username,
            email,
            password: hashedpassword
        })
        if(user){
            res.status(201).json({
                _id: user.id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            })
        }else {
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
) 


// authenticate a user
// method: POST
// access: Public
const loginUser = asyncHandler(
    async (req, res) => {
        const {email, password} = req.body
        //check for user email
        const user = await User.findOne({email})
        // compare to hashed password 
        if(user && (await bcrypt.compare(password, user.password)) ){
            res.json({
                _id: user.id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error('Invalid user credentials')
        }
    }
) 


// get user data
// method: GET
// access: Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
  })


// generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}