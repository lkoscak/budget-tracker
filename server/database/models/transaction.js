const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    created:{
        type:Date,
        default:Date.now
    }
});

const transaction = mongoose.model('Transaction',transactionSchema);

// Get all transactions from database
module.exports.getTransactions = callback => transaction.find(callback);

// Add new transaction
module.exports.addTransaction = (data, callback) => transaction.create(data,callback);

// Delete transaction from database
module.exports.deleteTransaction = (id, callback) => transaction.remove({_id:id},callback);
