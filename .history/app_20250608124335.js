const express = require('express');

const app = express();

app.get('/', (req, res)=>  {
    res.send('U');
});

app.listen(8080);

