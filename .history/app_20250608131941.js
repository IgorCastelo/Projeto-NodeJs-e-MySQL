//Importar modulo express
const express = require('express');

//importar modulo  mysql
const mysql = require('mysql2');

//app
const app = express();

// Configuração de conecxão com o banco de dados
const conecxao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'projeto'
});

//teste de conexão
conecxao.connect((errO) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
});


app.get('/', (req, res)=>  {
    res.send('Utilizando o nodemon');
});

app.listen(8080);

