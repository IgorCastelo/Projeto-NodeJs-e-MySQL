//I portar modulo express
const express = require('express');
//app
const app = express();



app.get('/', (req, res)=>  {
    res.send('Utilizando o nodemon');
});

app.listen(8080);

