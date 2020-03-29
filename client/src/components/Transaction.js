import React from 'react'


const Transaction = ({transaction}) => {
    return (
       <tr id={transaction._id} className={transaction.amount<0?"text-danger":"text-success"}>
           <td>{transaction.description}</td>
           <td className="text-center">{transaction.amount}</td>
           <td>{transaction.created.split("T")[0]}</td>
       </tr>
    )
}

export default Transaction;