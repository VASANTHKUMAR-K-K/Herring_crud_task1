import mongoose from 'mongoose'


const schema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    education:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    image: {
        type: String,
        required: true,
    },
    gender:{
        type:String,
        require:true
    }
})

export const Student=mongoose.model('Student',schema)



// {
//     "name":"gokulnath",
//     "contact":"99676",
//     "email":"vasanthnathdd@gmail.com",
//     "state":"tamilnadu",
//     "gender":"male",
//     "education":"mca",
//     "image":""
//   }