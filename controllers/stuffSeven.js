const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
})

exports.getAllReponse = (req,res,next) =>{
    connection.query('SELECT * FROM reponses' , (err,rows) => {
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

exports.AddAnswer = (req,res,next)=>{
    const params = req.body    
     connection.query('INSERT INTO reponses SET ?',params,(err,result) =>{
        if(!err){
            res.status(200).json({
                data : result
            })
        }
        else{
            res.json({error : err})
        }
    })
}

exports.ModifyAnswer = (req,res,next) =>{
    const {id_reponse ,reponse} = req.body

    connection.query('UPDATE reponses SET reponse  WHERE id_reponse = ?',[reponse,id_reponse],(err,rows)=> {
  
        if(!err){
            res.status(200).json({
                data : rows
            })
        }
        else{
            res.status(400)
        }
        
    })
}

exports.DeleteAnswer = (req,res,next) =>{
    connection.query('DELETE FROM reponse WHERE id_reponse = ? ',[req.params.id_reponse],(err,rows) =>{
        if(!err){
            res.status(200).json({
                message : "Supprimé !"
            })
        }
        else{
            console.log(err)
        }
    })
}