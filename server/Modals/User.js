
import mongoose from 'mongoose'

const schema=mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    contact:{
        type: String,
        require: true
    },
    email:{
        type: String,
        unique:true,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    // state:{
    //     type: String,
    //     require: true
    // },
    // zipcode:{
    //     type: String,
    //     require: true
    // },
    // role:{
    //     type: String,
    //     default:"user"
    // },

},{
    timestamps:true
})


export const User = mongoose.model("User", schema)