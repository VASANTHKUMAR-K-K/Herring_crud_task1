import {Student} from '../Modals/Student.js'

// import { rm } from 'fs'


export const CreateStu = async(req, res)=>{
    try {
        console.log(req.body)
        const {name, contact, email, state, gender,education}=req.body;
        const image=req.file;
         console.log(image)

        const details= await Student.create({
          name, 
          contact,
           email,
            state,
             gender,
             education,
             image:image?.path,

        })
        res.status(200).json({
          message:"data stored successfully",
          details
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
}



export const getStu= async (req, res)=>{
    await Student.find()
    .then(user=> res.status(200).json(user))
    .catch(err=>res.status(500).json(err))
}


export const editStu= async (req,res)=>{
    const id= req.params.id
    await Student.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        contact:req.body.contact,
        email:req.body.email,
        education:req.body.education,
        state:req.body.state,
        gender:req.body.gender
    })
    .then(user=>res.status(200).json({
        user,
        message:"Update Successfully"
    }))
    .catch(err=>res.status(500).json(err))
}


export const deleteStu = async (req,res)=>{
    const id = req.params.id;
    await Student.findByIdAndDelete({_id:id})
    .then(user=>res.status(200).json({
        message:"Deleted Successfully",
        user
    }))
    .catch(err=>res.status(500).json(err))
}