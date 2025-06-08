//Importar modulo express
const express = require('express');

//importar modulo  mysql
const mysql = require('mysql2');

//app
const app = express();




app.get('/', (req, res)=>  {
    res.send('Utilizando o nodemon');
});

app.listen(8080);

