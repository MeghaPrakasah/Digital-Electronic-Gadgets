
const { errorHandler } = require('../MiddleWares/errorHandler')
const User = require('../Model/userModel')
const asyncHandler = require('express-async-handler')

const createUser =asyncHandler(
    async(req,res)=>{
        const email = req.body.email
        const findUser = await User.findOne({email: email})
        if(!findUser){
            // create new user
            const newUser = await User.create(req.body)
            res.json(newUser)
        }
        else{
            res.json({
                msg:"User already exists",
                success:false
            })
        }
    }
    
)
module.exports = {createUser}