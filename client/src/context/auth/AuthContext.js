import React, { createContext, useContext, useReducer, useEffect } from 'react';

import AuthReducer from './AuthReducer';

// Initial state
const initialState = {
    error:false,
    error_message:"",
    user:null,
    isAuthenticated:false
}

const AuthContext = createContext(initialState);

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(authenticateUser,[]);

    // checking if user is authenticated
    function authenticateUser(){
        let token = getToken();
        if(token === null) dispatch({
            type: 'NO_TOKEN',
        });
        else{
            fetch('/api/v1/users/user',{
                method:'GET',
                headers:{
                    'x-auth-token':token
                }
            })
            .then(response => response.json())
            .then(data => {
                if(data.success) dispatch({
                    type: 'AUTHENTICATION_SUCCESS',
                    payload:data
                });
                else dispatch({
                    type: 'AUTHENTICATION_FAIL',
                    payload:data
                });
            })
            .catch(error => console.log(error))
        }
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
    console.log(localStorage.getItem('auth-token'));
    return localStorage.getItem('auth-token');
}