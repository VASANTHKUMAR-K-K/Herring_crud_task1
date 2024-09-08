import express from 'express'
import {loginUser, userRegister} from '../controller/User.js'
import {CreateStu, deleteStu, editStu, getStu} from '../controller/Student.js'
import { isAuth } from '../Middleware/isAuth.js'
import { uploadFiles } from '../Middleware/multer.js'

const router=express.Router()

router.post('/user/register', userRegister)
router.post('/user/login', loginUser)

router.post('/stu/create',uploadFiles,CreateStu)
router.get('/stu/getstudent',isAuth,getStu)
router.put('/stu/edit/:id',editStu)
router.delete('/stu/delete/:id',deleteStu)





export default router;