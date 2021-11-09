const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
})

exports.getAllAnswers = (req,res,next) =>{
    //requete pour afficher tous les cours
    connection.query('SELECT * FROM reponseetudiant' , (err,rows) => {

        if(!err){
            res.status(200).json({
                data : rows
            })
        }
        else{
            console.log(err)
            res.status(400)
        }
    })
}

exports.AddAnswer = (req,res,next)=>{
    const params = req.body

     
     connection.query('INSERT INTO reponseetudiant SET ?',params,(err,rows) =>{

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

exports.ModifyAnswer = (req,res,next) =>{
    const {id_reponse_etudiant ,reponse_Etudiant} = req.body

    connection.query('UPDATE reponseetudiant SET reponse_Etudiant = ? WHERE id_reponse_etudiant = ?',[reponse_Etudiant,id_reponse_etudiant],(err,rows)=> {
    
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

exports.DeleteAnswer = (req,res,next) =>{
 

    //requete pour supprimer un cours
    connection.query('DELETE FROM reponseetudiant WHERE id_reponse_etudiant = ? ',[req.params.id_reponse_etudiant],(err,rows) =>{


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