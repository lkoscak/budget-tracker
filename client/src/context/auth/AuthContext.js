import React, { createContext, useContext, useReducer, useEffect } from 'react';

import AuthReducer from './AuthReducer';

// Initial state
const initialState = {
    error:false,
    error_message:"",
    user:null,
    isAuthenticated:true,
    token:""
}

const AuthContext = createContext(initialState);

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(authenticateUser,[]);

    // checking if user is authenticated
    function authenticateUser(){
        fetch('/api/v1/users/user',{
            method:'GET',
            headers:{
                'x-auth-token':getToken()
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    return (
        <AuthContext.Provider value={{
            data:state
        }}>
        {children}
        </AuthContext.Provider>
    )
}

function getToken(){
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
}