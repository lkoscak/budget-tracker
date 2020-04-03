import React from 'react'

import NavbarLink from './NavbarLink';
import {useAuth} from '../context/auth/AuthContext';;

function Navbar (){
    const auth = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <a className="navbar-brand text-warning" href="/">Budget tracker</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ml-auto">
            {auth.data.isAuthenticated?<NavbarLink linkText="Logout" linkDestination="/"/>
            :<><NavbarLink linkText="Login" linkDestination="/login"/>
            <NavbarLink linkText="Register" linkDestination="/register"/></>} 
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;