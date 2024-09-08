
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app=express()

 app.use(cors());
// app.use(cors({
//     origin: ["http://localhost:3000"],
//      methods: ["GET", "POST"],
//     credentials: true
// }))
app.use(express.json())
dotenv.config();git init


//STATIC FILES
app.use('/uploads', express.static("uploads"))

//IMPORTS
import userRoutes from './Routes/User.js'

app.use('/api',userRoutes)


// DATABASE
const dburl="mongodb://localhost:27017/crud"
mongoose.connect(dburl)
.then(()=>{
    console.log('db connected')
})
.catch((err)=>
    console.log(err)
)



const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running on the ${port}`)
})

