const express = require('express');

const app = express();
app.get('/', (req, res)=>  {
    res.wi('Hello World');
});