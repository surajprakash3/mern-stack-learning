const express =require('express');
const {studentInfo}=require('../controllers/studentController')
const teachercreateData = require('../controllers/studentController')


const router=express.Router();

router.post('/student-post',studentInfo)
router.post('/teacher-post',teachercreateData)

module.exports=router;