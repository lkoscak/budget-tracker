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
            type:'ADD_TRANSACTIONS',
            transactions:transactions.data
        }));
    }

    // Getting transactions from database at TransactionProvider render
    useEffect(() => getTransactions(), [])

    return(
        <TransactionContext.Provider value={{
            transactions:state.transactions}}>
            {children}
        </TransactionContext.Provider>
    );
}
