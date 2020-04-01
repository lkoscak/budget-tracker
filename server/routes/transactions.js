const express = require('express');
const router = express.Router();

const auth = require('../midleware/auth');

const {getTransactions, addTransaction, deleteTransaction, getTransaction} = require('../controllers/transactionController');

router.route('/')
    .get(getTransactions)
    .post(addTransaction)

router.route('/:id')
    .delete(auth,deleteTransaction)
    .get(auth,getTransaction)

module.exports = router;