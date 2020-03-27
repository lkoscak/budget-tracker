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

module.exports = mongoose.model('Transaction',transactionSchema);

