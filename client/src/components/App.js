import React from 'react'

import AuthenticatedApp from './AuthenticatedApp';
import UnAuthenticatedApp from './UnAuthenticatedApp';

import {useAuth, AuthProvider} from '../context/auth/AuthContext';

function App (){

    const authData = useAuth();

    return (
        <>
            {authData.data.isAuthenticated?<AuthenticatedApp/>:<UnAuthenticatedApp/>} 
        </>
    )
}

export default App;
