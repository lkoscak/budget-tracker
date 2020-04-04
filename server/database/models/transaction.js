const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    description:{
        type:String,
        required:[true, 'Description not specified']
    },
    amount:{
        type:Number,
        required:[true, 'Amount not specified']
    },
    user:{
        type:String,
        required:[true, 'Transaction needs to be connected to a user']
    },
    created:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Transaction',transactionSchema);

