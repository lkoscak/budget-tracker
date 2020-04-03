import React from 'react'

import {useAuth} from '../context/auth/AuthContext';

function NavbarLink ({linkText, linkDestination}) {
    const auth = useAuth();
    return (
        <li className="nav-item">
            <a className="nav-link" href={linkDestination} onClick={auth.data.isAuthenticated?auth.logout:null}>{linkText}</a>
        </li>
    )
}

export default NavbarLink;
