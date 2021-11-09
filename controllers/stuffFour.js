const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
})

exports.getAllQuestions = (req,res,next) =>{
    connection.query('SELECT question FROM questions \n' +
        'UNION ALL\n' +
        'SELECT reponse FROM reponses LEFT JOIN questions ON reponses.id_quiz = questions.id_question GROUP BY reponse; ',(err,rows) => {
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

exports.CreateQuestion = (req,res,next)=>{
    const params = req.body
     connection.query('INSERT INTO questions SET ? ',params,(err,result) =>{

        if(!err){
            res.status(200).json({
                data : result
            })
        }
        else{
           console.log(err);
        }
    })
}

exports.ModifyQuestion = (req,res,next) =>{
    const {id_question, question ,reponseCorrecte} = req.body

    connection.query('UPDATE questions SET question = ? reponseCorrecte = ?  WHERE id_question =  ?',[question,id_question,reponseCorrecte],(err,rows)=> {
    
        if(!err){
            res.status(200)
        }
        else{
            console.log(err)
        }
        
    })
}

exports.DeleteQuestion = (req,res,next) =>{
    //requete pour supprimer un cours
    connection.query('DELETE FROM questions WHERE id_question = ? ',[req.params.id_question],(err,rows) =>{

        if(!err){
            res.status(200)
        }
        else{
            console.log(err)
            res.status(400)
        }
    })
}