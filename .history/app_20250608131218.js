//Importar modulo express
const express = require('express');

//importar modulo  mysql


//app
const app = express();



app.get('/', (req, res)=>  {
    res.send('Utilizando o nodemon');
});

app.listen(8080);

