import React, { useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext';

const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(TransactionContext);

    return (
       <tr id={transaction._id} className={transaction.amount<0?"text-danger":"text-success"}>
           <td>{transaction.description}</td>
           <td className="text-center">{transaction.amount}</td>
           <td className="btn-sm btn-outline-warning text-center"
            onClick = {() => deleteTransaction(transaction._id)}
            >X</td>
       </tr>
    )
}

export default Transaction;