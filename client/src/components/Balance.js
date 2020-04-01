import React, {useContext} from 'react'
import {TransactionContext} from '../context/transaction/TransactionContext';

const Balance = () => {

const {transactions} = useContext(TransactionContext);

const balance = transactions.map(transaction => transaction.amount).reduce((balance, amount) => (balance+=amount), 0).toFixed(2);
    return (
       <h4 className="mb-5">Current balance: {balance} kn</h4>
    )
}

export default Balance;