const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    description:{
        type:String,
        required
    },
    amount:{
        type:Number,
        required
    },
    created:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Transaction',transactionSchema);