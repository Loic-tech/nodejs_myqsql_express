const express = require('express');
const routerOne = express.Router();
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const StuffControllerOne = require('../controllers/stuffOne');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
});


routerOne.get('/',StuffControllerOne.getAllStudents);
routerOne.get('/:id',StuffControllerOne.getOneStudent);
routerOne.post('/Signup',StuffControllerOne.CreateStudent);
routerOne.post('/signin',StuffControllerOne.ConnexionStudent);
routerOne.put('/Modify/:id',StuffControllerOne.ModifyEmail);
routerOne.put('/Modify/:id',StuffControllerOne.ModifyPassword);
routerOne.put('/Modify/:id',StuffControllerOne.ModifyUsername);
routerOne.delete('/Delete/:id',StuffControllerOne.DeleteStudent);


module.exports = routerOne;