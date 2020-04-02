import React from 'react'

import Title from './Title';
import {useAuth} from '../context/auth/AuthContext';

function UnAuthenticatedApp () {
    const auth = useAuth();
    return (
        <div>
            <Title titleText="Book tracker"/>
        </div>
    )
}

export default UnAuthenticatedApp;
