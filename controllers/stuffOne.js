const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
})



exports.CreateStudent = (req,res,next)=>{
    const params = req.body

    bcrypt.hash(req.body.password,10)
    .then(hash =>{
        connection.query('INSERT INTO identification SET ?',params,(err,rows) => {
            if(!err){
                res.status(200).json({
                    data : rows
                })
            }
            else{
                console.log(err)
            }
       })
    })
    .catch(error => res.status(500).json({ error }))    
}

exports.getAllStudents = (req,res,next) =>{
 //requête pour afficher tous les etudiants
    connection.query('SELECT * FROM identification', (err,rows) => {
            if(!err){
            res.status(200).json({
                data : rows
            })
        }
        else{
            res.status(400).json({err})
        }
    })
}


exports.getOneStudent = (req,res,next) =>{
    //requête pour afficher tous les etudiants
    connection.query('SELECT username,password,email FROM identification WHERE id = ?',[req.params.id],(err,rows) => {
        if(!err){
            res.status(200).json({
                data : rows
            })
        }
        else{
            console.log(err)
        }
    })
}


exports.ConnexionStudent = (req,res,next)=>{

    const token = req.headers['x-access-token'];
    const sql = "SELECT * FROM `identification` WHERE email='jean@gmail.com' AND password='1234'";
    const {email,password} = req.body;
    connection.query(sql,req.body,(err,rows) => {
         if(!err){
            res.status(200).json({
                data : {rows,
                    token : jwt.sign(
                        {userId : req.body.id},
                        'RANDOM_TOKEN_SECRET'
                    )}

            })
         }
         else{
            console.log(err)
         }

    })  
}

exports.ModifyUsername = (req,res,next) =>{

    connection.query('UPDATE identification SET username = ?  WHERE id = ?',req.body,[req.params.id],(err,rows)=> {
        if(!err){
            res.status(200).json({
                data : rows
            })
        }
        else{
            console.log(err)
        }
        
    })
}

exports.ModifyEmail = (req,res,next) =>{
    connection.query('UPDATE identification SET email = ?  WHERE id = ?',req.body,[req.params.id],(err,rows)=> {
        if(!err){
            res.status(200).json({
                data : rows
            })
        }
        else{
            console.log(err)
        }

    })
}

exports.ModifyPassword = (req,res,next) =>{

    connection.query('UPDATE identification SET password = ?  WHERE id = ?',req.body,[req.params.id],(err,rows)=> {
        if(!err){
            res.status(200).json({
                data : rows
            })
        }
        else{
            console.log(err)
        }

    })
}








exports.DeleteStudent = (req,res,next) =>{
    connection.query('DELETE FROM identification WHERE id = ? ',[req.params.id],(err,rows) =>{
        if(!err){
            res.status(200).json({
                message : "Human Removed 👍 !"
            })
        }
        else{
            console.log(err)
        }
    })
}