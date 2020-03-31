const User = require('../database/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// @desc    Register new user
// @route   POST api/v1/users/register
// @access  Public
module.exports.registerUser = async (req,res,next) => {
    try {
        const {name, email, password} = req.body;
        if(name===""||email===""||password==="") {
            res.status(400).json({
                success:false,
                error:'Invalid input'
            });
        }else{
            let user = await User.findOne({email});
            if(user){
                res.status(400).json({
                    success:false,
                    error:'User already exists'
                });
            }else{
                let newUser = new User({
                    name,
                    email,
                    password
                })
                bcrypt.genSalt(10, (error, salt) => {

                    bcrypt.hash(newUser.password, salt, (error, hash) => {
                        if(error){
                            res.status(500).json({
                                success:false,
                                error:error.message
                            });
                        }else{
                            newUser.password = hash;
                            newUser.save()
                            .then(registerdUser => {
                                
                                jwt.sign({
                                    id:registerdUser._id
                                }, process.env.JWT_SECRET,{
                                    expiresIn:3600
                                }, (err, token) => {
                                console.log(err);
                                res.status(201).json({
                                success:true,
                                token:token,
                                data:{
                                    id:registerdUser._id,
                                    name:registerdUser.name,
                                    email:registerdUser.email
                                }
                            })
                                   
                                });

                                });
                        }
                    })
                });
            }
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
};

// @desc    Login - authenticate user
// @route   POST api/v1/users/login
// @access  Public
module.exports.loginUser = async (req,res,next) => {
    try {
        const {email, password} = req.body;
        if(email===""||password==="") {
            res.status(400).json({
                success:false,
                error:'Invalid input'
            });
        }else{
            let user = await User.findOne({email});
            if(!user){
                res.status(400).json({
                    success:false,
                    error:'User does not exist'
                });
            }else{

                bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({
                        success:false,
                        error:'Wrong credentials'
                    });
                
                                jwt.sign({
                                    id:user._id
                                }, process.env.JWT_SECRET,{
                                    expiresIn:3600
                                }, (err, token) => {
                                console.log(err);
                                res.status(201).json({
                                success:true,
                                token:token,
                                data:{
                                    id:user._id,
                                    name:user.name,
                                    email:user.email
                                }
                            })
                                   
                                });
                            })
            }
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
};

module.exports.getUser=(req,res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.status(200).json({
        success:true,
        data:user
    }))
}