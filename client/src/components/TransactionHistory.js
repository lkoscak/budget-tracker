import React, {useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext';
import Transaction from './Transaction';

const TransactionHistory = () => {

    const {transactions} = useContext(TransactionContext);

    return (
        <table className="table table-hover">
        <thead>
            <tr>
                <th>Description</th>
                <th className="text-center">Amount</th>
                <th>Date</th>
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