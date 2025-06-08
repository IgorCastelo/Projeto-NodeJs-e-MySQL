//Importar modulo express
const e = require('express');
const express = require('express');

//Importar modudo espress-handlebars
const {engine} = require('express-handlebars');

//importar modulo  mysql
const mysql = require('mysql2');

//app
const app = express();

//Configuração do express-handlebars
// Configuração do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração de conecxão com o banco de dados
const conecxao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'projeto'
});

//teste de conexão
conecxao.connect((erro) => {
    if (erro) throw erro;
    console.log('Conexão efetuada com sucesso!');
});

//Rota Hello World
app.get('/', (req, res)=>  {
    res.send('Utilizando o nodemon');
});

app.listen(8080);

