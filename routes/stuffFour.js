const express = require('express');
const routerFour = express.Router();
const mysql = require('mysql');
const stuffCtrl = require('../controllers/stuffFour');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
})

routerFour.get('/',stuffCtrl.getAllQuestions)
routerFour.post('/Create',stuffCtrl.CreateQuestion)
routerFour.put('/Modify/:id',stuffCtrl.ModifyQuestion)
routerFour.delete('/Delete/:id',stuffCtrl.DeleteQuestion)


module.exports = routerFour;