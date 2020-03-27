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
    created:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Transaction',transactionSchema);

