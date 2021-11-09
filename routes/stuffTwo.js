const express = require('express');
const routerTwo = express.Router();
const mysql = require('mysql');
const stuffCtrl = require('../controllers/stuffTwo');
const multer = require('../middleware/multer-config');
const multerS = require('../middleware/multer-configtwo');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
})

routerTwo.get('/',stuffCtrl.getAllCourses);
routerTwo.get('/:id',stuffCtrl.getOneCourse);
routerTwo.post('/onecourse',stuffCtrl.getOneCoursebyName);
routerTwo.get('/prof/:id',stuffCtrl.GetCourseFromProf);
routerTwo.delete('/delete/:id',stuffCtrl.DeleteOneCourse);
routerTwo.put('/Modifier/:id',stuffCtrl.ModifyCourse);
routerTwo.post('/newCourse',stuffCtrl.CreateCourse);


module.exports = routerTwo;