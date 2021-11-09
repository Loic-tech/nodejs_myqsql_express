const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
})

exports.getAllCourses =(req,res,next) =>{
    //requete pour afficher tous les cours
    connection.query('SELECT * FROM cours' , (err,rows) => {
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

exports.getOneCourse = (req,res,next) =>{
    //requete pour afficher un cours
    connection.query('SELECT * FROM cours WHERE id = ?',[req.params.id],(err,rows) =>{
        if(!err){
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })

}

exports.getOneCoursebyName = (req,res,next) =>{
    //requete pour afficher un cours
    const params = req.body.titre;
    connection.query('SELECT * FROM `cours` WHERE titre = ?', req.body.titre,(err,rows) =>{
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


exports.GetCourseFromProf = (req,res,next) =>{
    connection.query('SELECT * FROM cours WHERE cours.id_prof = ? ',[req.params.id],(err,rows) =>{
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


exports.DeleteOneCourse = (req,res,next) =>{
    //requete pour supprimer un cours
    connection.query('DELETE FROM cours WHERE id = ? ',[req.params.id],(err,rows) =>{
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

exports.ModifyCourse = (req,res,next) =>{
    const {id,titre,pdf,image} = req.body;
    connection.query('UPDATE cours SET titre = ? pdf = ? image = ? WHERE id = ?',req.body,(err,rows)=> {
        if(!err){
            res.status(200)
        }
        else{
            console.log(err)
        }
        
    })
}

exports.CreateCourse = (req,res,next)=>{
    const params = req.body;
     connection.query('INSERT INTO cours SET ?',params,(err,rows) =>{
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