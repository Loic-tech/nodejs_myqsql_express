const express = require('express');
const routerSix = express.Router();
const mysql = require('mysql');
const stuffCtrl = require('../controllers/stuffSix');


const conn = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : 'etudiant'
})


routerSix.get('/',stuffCtrl.getAllAnswers);
routerSix.post('/Add',stuffCtrl.AddAnswer);
routerSix.put('/Modify/:id',stuffCtrl.ModifyAnswer);
routerSix.delete('/Delete/:id',stuffCtrl.DeleteAnswer);


module.exports = routerSix;