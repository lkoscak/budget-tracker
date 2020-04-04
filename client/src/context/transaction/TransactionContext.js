import React, { createContext, useReducer, useEffect, useContext } from 'react';
import TransactionReducer from './TransactionReducer';

import {useAuth} from '../auth/AuthContext';

const initialState = {
    transactions:[]
}

export const TransactionContext = createContext(initialState);

export const useTransaction = () => useContext(TransactionContext);

export const TransactionProvider = ({children}) => {

    const auth = useAuth();

    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    // Getting transactions
    function getTransactions(){
        fetch(`api/v1/users/${auth.data.user._id}/transactions`,{
            method:"GET",
            headers:{
                'x-auth-token':auth.data.token
            }
        })
        .then(res => res.json())
        .then(transactions => dispatch({
            type:'GET_TRANSACTIONS',
            payload:transactions.data
        }))
        .catch(error => console.log(error));
    }

    // Getting transactions from database at TransactionProvider render
    useEffect(() => getTransactions(), [])

    // Working with transactions
    function addTransaction(transaction){
        
        fetch('api/v1/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token':auth.data.token
            },
            body: JSON.stringify({
                description:transaction.description,
                amount:transaction.amount,
                user:auth.data.user._id
            }),
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
            .catch(error => console.log('Error:', error));
    }

    function deleteTransaction(id){
        fetch(`api/v1/transactions/${id}`,{
            method:'DELETE',
            headers:{
                'x-auth-token':auth.data.token
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.success){
                dispatch({
                    type:'DELETE_TRANSACTION',
                    payload:id
                })
            }
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions:state.transactions,
            addTransaction,
            deleteTransaction}}>
            {children}
        </TransactionContext.Provider>
    );
}
