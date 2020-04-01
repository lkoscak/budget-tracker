const Transaction = require('../database/models/transaction');


// @desc    Get all transactions
// @route   GET api/v1/transactions
// @access  Public
module.exports.getTransactions = async(req, res, next) => {
    try {
        let transactions = await Transaction.find().sort({'created':'desc'}); //limit(n), skip(n)
        res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}

// @desc    Get a transaction
// @route   GET api/v1/transactions/id
// @access  Public
module.exports.getTransaction = async(req, res, next) => {
    let id = req.params.id;
    try {
        let transaction = await Transaction.findById(id);
        if(!transaction){
            res.status(404).json({
                success:false,
                error:'Transaction with given id not found'
            });
        }else{
            res.status(200).json({
                success:true,
                data:transaction
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}

// @desc    Add a transaction
// @route   POST api/v1/transactions
// @access  Public
module.exports.addTransaction = async(req, res, next) => {
    try {
        let transaction = await Transaction.create(req.body);
        return res.status(201).location(`/api/v1/transactions/${transaction._id}`).json({
            success:true,
            data:transaction
        });
    } catch (error) {
        if(error.name==='ValidationError'){
            const messages = Object.values(error.errors).map(val => val.message);
            return  res.status(400).json({
                success:false,
                error:messages
            });
        }
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}

// @desc    Delete a transaction
// @route   DELETE api/v1/transactions/id
// @access  Public
module.exports.deleteTransaction = async(req, res, next) => {
    let id = req.params.id;
    try {
        let transaction = await Transaction.findById(id);
        if(!transaction){
            res.status(404).json({
                success:false,
                error:'Transaction with given id not found'
            });
        }else{
            await transaction.remove();
            res.status(200).json({
                success:true
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
        });
    }
}
