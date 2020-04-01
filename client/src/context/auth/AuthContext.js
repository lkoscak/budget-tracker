import React, { createContext, useContext, useReducer } from 'react';

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

    return (
        <AuthContext.Provider value={{
            data:state
        }}>
        {children}
        </AuthContext.Provider>
    )
}