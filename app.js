const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');
const stuffRouteOne = require('./routes/stuffOne');
const stuffRouteTwo = require('./routes/stuffTwo');
const stuffRouteFour = require('./routes/stuffFour');
const stuffRouteSix = require('./routes/stuffSix');
const stuffRouteSeven = require('./routes/stuffSeven');





const app = express();

app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });



const connection = mysql.createConnection({
    host : 'localhost',
    user : 'GNAGOH',
    password : '123456',
    database : "etudiant"
})

connection.connect((err) => {
    if(err)
        console.log('Connexion à MySQL echouée !');
    else
        console.log('Connexion à MySQL réussie !');
})








app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/fichiers', express.static(path.join(__dirname, 'fichierpdf')));

app.use('/connexion',stuffRouteOne);
app.use('/cours',stuffRouteTwo);
app.use('/questions',stuffRouteFour);
app.use('/ReponsesEtudiant',stuffRouteSix); 
app.use('/reponses',stuffRouteSeven);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

module.exports = app;