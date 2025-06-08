//Importar modulo express
const express = require('express');

//importar modulo  mysql
const mysql = require('mysql2');

//app
const app = express();

// Configuração de conecxão com o banco de dados
const conecxao =  


app.get('/', (req, res)=>  {
    res.send('Utilizando o nodemon');
});

app.listen(8080);

