
import bcrypt from 'bcrypt'
import {User} from '../Modals/User.js'
import jwt from 'jsonwebtoken'


export const userRegister= async (req,res)=>{
    try {
        console.log(req.body);
        const {name, contact, email, password} =req.body;
        const user= await User.findOne({email})
        console.log(user,"hiiiii")
        if(user){
            return res.status(400).json({
                message:"User is already exists"
            })
        }
        else{

           let user={name,contact, email,password}

            const otp = Math.floor(Math.random() * 1000000)
            console.log(otp)
    
            const activationToken = jwt.sign({user, otp}, process.env.ACTIVATION_SECRETE,{
                expiresIn: "1h"
            });
            console.log(activationToken)
            res.status(200).json({
                message:"Register Successfully",
                // activationToken
            })
            const hashpassword = await bcrypt.hash(password,10)
            console.log(hashpassword)
            // user={name,contact, email,hashpassword}


       
            await User.create({
                name:name,
                contact:contact,
                email:email,
                password:hashpassword,
            })
              
    

        }    
       
    } catch (error) {
       return res.status(500).json({
            message:error.message
        })
        
    }
}


//LOGIN USERS

export const loginUser= async (req,res)=>{
    try {
        //console.log(req.body)
        const {email, password}=req.body;
        const user=await User.findOne({email})
        console.log(user)
        if(!user){
            return res.status(500).json({
                message:"Invalid Credentials"
            })
        }

        const matchpassword = await bcrypt.compare(password,user.password)
        //console.log(matchpassword)
        if(!matchpassword){
            return res.status(500).json({
                message:"Invalid password"
            })
        }

        //GENERATE SIGNED TOKEN
        const token = jwt.sign({_id:user.id},process.env.JWT_SECRETE,{
            expiresIn: "1d"
        });
        console.log(token)
        return res.status(200).json({
            message:"Login Successfully",
            token,
        })

    } catch (error) {
        return res.status(500).json({
            message:error.message,
        })
        
    }
}