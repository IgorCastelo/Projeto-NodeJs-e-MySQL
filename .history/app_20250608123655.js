const express = require('express');

const app = express();

app.get('/', (req, res)=>  {
    res.send('Hello Worldssssss');
});

app.listen(8080);

