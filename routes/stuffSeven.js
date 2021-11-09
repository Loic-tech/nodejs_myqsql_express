const express = require('express');
const routerSeven = express.Router();
const mysql = require('mysql');
const stuffCtrl = require('../controllers/stuffSeven');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
})

routerSeven.get('/',stuffCtrl.getAllReponse);
routerSeven.post('/Add',stuffCtrl.AddAnswer);
routerSeven.put('/Modify/:id',stuffCtrl.ModifyAnswer);
routerSeven.delete('/Delete/:id',stuffCtrl.DeleteAnswer);


module.exports = routerSeven;