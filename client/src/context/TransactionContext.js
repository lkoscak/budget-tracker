import React, { createContext, useReducer, useEffect } from 'react';
import TransactionReducer from './TransactionReducer';

const initialState = {
    transactions:[]
}

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({children}) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    function getTransactions(){
        fetch('/api/v1/transactions')
        .then(res => res.json())
        .then(transactions => dispatch({
            type:'GET_TRANSACTIONS',
            payload:transactions.data
        }));
    }

    // Getting transactions from database at TransactionProvider render
    useEffect(() => getTransactions(), [])

    // Working with transactions
    function addTransaction(transaction){
    fetch('api/v1/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
        })
        .then(response => response.json())
        .then(data => {
            if(data.success){
                dispatch({
                    type:'ADD_TRANSACTION',
                    payload:data.data
                })
            }
        })
        .catch(error => console.error('Error:', error));
    }

    return(
        <TransactionContext.Provider value={{
            transactions:state.transactions,
            addTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
}
