const express = require('express');
const router = express.Router();

const {getTransactions, addTransaction, deleteTransaction} = require('../database/models/transaction');

router.route('/')
    .get((req, res, next) => {
        getTransactions((err, transactions) => {
            if(err){
                res.status(500).json({
                    success:false,
                    error:`Error getting data from database: ${err.message}`
                });
            }else{
                res.status(200).json({
                    success:true,
                    count:transactions.length,
                    data: transactions
                });
            }
        });
    })
    .post((req, res, next) => {
        const data = req.body;
        addTransaction(data,(err, transaction) => {
            if(err){
                res.status(500).json({
                    success:false,
                    error:`Error adding data to database: ${err.message}`
                });
            }else{
                res.status(201).json({
                    success:true,
                    data: transaction
                });
            }
        });
    });
router.route('/:id')
    .delete((req, res, next) => {
        const id = req.params.id;
        deleteTransaction(id,(err) => {
            if(err){
                res.status(500).json({
                    success:false,
                    error:`Error deleting data from database: ${err.message}`
                });
            }else{
                res.status(200).json({
                    success:true,
                });
            }
        });
    });

module.exports = router;