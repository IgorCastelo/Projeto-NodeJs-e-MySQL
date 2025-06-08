const express = require('express');

const app = express();
app.get('/', (req, res)=>  {
    res.write('Hello World');
});