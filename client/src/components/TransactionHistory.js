import React from 'react'
import {useTransaction} from '../context/transaction/TransactionContext';
import Transaction from './Transaction';

const TransactionHistory = () => {

    const {transactions} = useTransaction();

    return (
        <table className="table table-hover">
        <thead>
            <tr>
                <th>Description</th>
                <th className="text-center">Amount</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {transactions.map(transaction => <Transaction
                key={transaction._id}
                transaction={transaction}
            />)}
        </tbody> 
        </table>
    )
}

export default TransactionHistory;