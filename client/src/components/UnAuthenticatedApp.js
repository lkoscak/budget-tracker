import React from 'react'

import Title from './Title';
import {useAuth} from '../context/auth/AuthContext';

function UnAuthenticatedApp () {
    const auth = useAuth();
    return (
        <div>
        </div>
    )
}

export default UnAuthenticatedApp;
