const User = require('../database/models/user');
const bcrypt = require('bcryptjs');

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
                            console.log(hash);
                            newUser.password = hash;
                            newUser.save()
                            .then(registerdUser => {
                                res.status(201).json({
                                success:true,
                                data:{
                                    id:registerdUser._id,
                                    name:registerdUser.name,
                                    email:registerdUser.email
                                }
                            })});
                            
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