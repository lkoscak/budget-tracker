import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';

import {useAuth} from '../context/auth/AuthContext';

import Alert from './Alert';

function RegistrationForm (){

    const auth = useAuth();

    const [formInput, setFormInput] = useState({
        name:"",
        email:"",
        password:""
    })

    function formSubmitted(e){
        e.preventDefault();
        let user = formInput;
        auth.register(user);
    }


    function inputChanged(e){
        let {name, value} = e.target;
        setFormInput(prevValue => ({
            ...prevValue,
            [name]:value
        }));
    }

    return (
        <>
        {auth.data.isAuthenticated?<Redirect to='/'/>:
        <>
        {auth.data.error?<Alert error={auth.data.error_message}/>:null}
        <form onSubmit={formSubmitted}>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm">Name</label>
                <input className="form-control form-control-sm" type="text" name="name" value={formInput.name} onChange={inputChanged}/>
            </div>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm">Email</label>
                <input className="form-control form-control-sm" type="email" name="email" value={formInput.email} onChange={inputChanged}/>
            </div>
            <div className="form-group">
                <label className="col-form-label col-form-label-sm">Password</label>
                <input className="form-control form-control-sm" type="password" name="password" value={formInput.password} onChange={inputChanged}/>
            </div>
            <button type="submit" className="btn btn-outline-warning btn-block mb-5">Register</button>
        </form>
        </>
        }
        </>
    )
}

export default RegistrationForm;
