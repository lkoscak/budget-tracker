require('dotenv').config();

const express = require('express');
const path = require('path');

const connection = require('./database/config');
const transactions = require('./routes/transactions');

const app = express();
app.use(express.json());

// Connecting to database
connection();

// API routes for transactions
app.use("/api/v1/transactions",transactions);

// Statitc folder config
app.use(express.static(path.join(__dirname,'build')));

app.get('*',(req,res,next) => {
    res.sendFile(path.join(__dirname,'build','index.html'));
});

app.listen(process.env.PORT, 
    console.log(`Server started in ${process.env.node_env} mode at port ${process.env.PORT || 5000}`));