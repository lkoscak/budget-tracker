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

app.listen(process.env.PORT, 
    console.log(`Server started in ${process.env.node_env} mode at port ${process.env.PORT}`));