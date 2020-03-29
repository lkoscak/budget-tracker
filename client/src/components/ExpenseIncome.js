import React, {useContext} from 'react'
import { TransactionContext } from '../context/TransactionContext';

const ExpenseIncome = () => {

    const {transactions} = useContext(TransactionContext);

    const expenses = transactions.map(transaction => transaction.amount).filter(amount => amount>0).reduce((expenses,amount) => (expenses+=amount), 0).toFixed(2);
    const incomes = transactions.map(transaction => transaction.amount).filter(amount => amount<0).reduce((expenses,amount) => (expenses+=amount), 0).toFixed(2);
    
    return (
        <div className="row">
            <div className="col-6">
                <div className="card text-white bg-success mb-3" style={{maxWidth: 20+"rem"}}>
                    <div className="card-body">
                        <h4 className="card-title">Incomes</h4>
                        <p className="card-text">{expenses}</p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card text-white bg-danger mb-3" style={{maxWidth: 20+"rem"}}>
                    <div className="card-body">
                        <h4 className="card-title">Expenses</h4>
                        <p className="card-text">{incomes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseIncome;
