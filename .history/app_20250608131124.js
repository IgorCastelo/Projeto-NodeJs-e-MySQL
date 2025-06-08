const express = require('express');

const app = express();



app.get('/', (req, res)=>  {
    res.send('Utilizando o nodemon');
});

app.listen(8080);

