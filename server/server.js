require('dotenv').config();

const express = require('express');
const path = require('path');

const connection = require('./database/config');

const app = express();
app.use(express.json());

connection();

app.get('/', (req, res, next) => {
    res.send('Hello world');
});

app.listen(process.env.PORT, console.log(`Server started in ${process.env.node_env} mode at port ${process.env.PORT}`));