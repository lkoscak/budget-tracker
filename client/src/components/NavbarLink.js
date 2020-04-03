import React from 'react'
import {Link} from 'react-router-dom';

import {useAuth} from '../context/auth/AuthContext';

function NavbarLink ({linkText, linkDestination}) {
    const auth = useAuth();
    return (
        <li className="nav-item">
            <Link className="nav-link" to={linkDestination} onClick={auth.data.isAuthenticated?auth.logout:null}>{linkText}</Link>
        </li>
    )
}

export default NavbarLink;
