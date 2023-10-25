const userModel = require("../models/authModel.js");
// const emailValidator = require("email-validator");
const bcrypt = require("bcrypt")



const cookieOption = {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true
}

const sign = async (req,res,next) =>{
    const {name , email ,phone, password} = req.body

    if( !name ||  !email || !phone || !password){
        return res.status(400).json({
            success: false,
            message: "Enter all filed required"
        })
    }

    // // const validEmail = emailValidator.validEmail(email);

    // if(!validEmail){
    //     return res.status(400).json({
    //         success:false,
    //         message: "Email not verified"
    //     })
    // }

    try {
        const newUser = await userModel(req.body);
         await newUser.save();

        const token = await newUser.generateJWTToken();

        res.cookie('token',token,cookieOption)
        
        return res.status(200).send(newUser)
    } catch (error) {
        

        return res.status(400).json({
            success : false,
            message: error.message
        })
    }

   
}

const login = async(req,res) =>{
    const {email , password} = req.body

    try {
        if(!email || !password) {
            return res.status(400).json({
                message: "Email or password space is empty"
            })
        }
        const user = await userModel.findOne({email}).select('+password');

        if (!user) {
            return res.status(401).json({
              success: false,
              message: "Please login with correct email credentials",
            });
          }
    
        if (!await user.comparePassword(password)) 
            {
            return res.status(401).json({
                success: false,
                error: "Please login with correct password credentials"
            })
        }
    
        const token = await user.generateJWTToken();
    
        res.cookie("token",token,cookieOption);
    
        user.password = undefined;
        return res.status(200).send(user)
    } catch (error) {
        return res.status(400).json({
            success : false,
            message: error.message
        })
    }

}


const logout = async (req,res) => {
  try {
    res.cookie('token', null,{
        secure: true,
        httpOnly:true,
        maxAge: 0
    })

    return res.status(200).json({
        success: true,
        message: "Logout"
    });
  } catch (error) {
    return res.status(400).send(("User has been logged out."))
  }
}

module.exports = {
    sign, login , logout
}