import React, { useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext';

const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(TransactionContext);
    return (
       <tr id={transaction._id} className={transaction.amount<0?"text-danger":"text-success"}
        onClick = {() => deleteTransaction(transaction._id)}>
           <td>{transaction.description}</td>
           <td className="text-center">{transaction.amount}</td>
           <td>{transaction.created.split("T")[0]}</td>
       </tr>
    )
}

export default Transaction;