const express = require('express');

const app = express();

app.get('/', (req, res)=>  {
    res.send('Hello Worldsssssssss');
});

app.listen(8080);

