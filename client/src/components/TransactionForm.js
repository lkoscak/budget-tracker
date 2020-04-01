import React, {useState, useContext} from 'react'
import {TransactionContext} from '../context/transaction/TransactionContext';

const TransactionForm = () => {

    const {addTransaction} = useContext(TransactionContext);

    const [formInput, setformInput] = useState({
        description:"",
        amount:""
    });

    

    const inputChanged = (e) => {
        const {name,value} = e.target;
        setformInput(prevState => ({
            ...prevState,
            [name]:value
        }));
    }

    const formSubmitted = (e) => {
        e.preventDefault();
        let newTransaction = formInput;
        addTransaction(newTransaction);
        

    }

    return (
        <form onSubmit={formSubmitted}>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm">Transaction description</label>
                <input className="form-control form-control-sm" type="text" name="description" value={formInput.desc} onChange={inputChanged}/>
            </div>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm">Transaction amount</label>
                <input className="form-control form-control-sm" type="number" name="amount" value={formInput.amonut} onChange={inputChanged}/>
            </div>
            <button type="submit" className="btn btn-outline-warning btn-block mb-5">Add</button>
        </form>
    )
}

export default TransactionForm;
