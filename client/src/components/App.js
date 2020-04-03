import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AuthenticatedApp from './AuthenticatedApp';
import UnAuthenticatedApp from './UnAuthenticatedApp';
import Navbar from './Navbar';
import LoginForm from './LoginForm';

import {useAuth} from '../context/auth/AuthContext';

function App (){

    const authData = useAuth();

    return (
        <>
         <Router>
            <Navbar/>
                    <Route exact path='/'>
                        {authData.data.isAuthenticated?<AuthenticatedApp/>:<UnAuthenticatedApp/>}
                    </Route>
                    <Route path='/login'>
                        <LoginForm/>
                    </Route>
                    <Route path='/register'></Route>
            </Router>
        </>
    )
}

export default App;
