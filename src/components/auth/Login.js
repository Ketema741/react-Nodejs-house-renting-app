import React, { useState, useContext, useEffect } from 'react'
import './login.css'
import Alert from '../layouts/Alerts'

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';


const Login = (props) => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext)

    const [realtor, setRealtor] = useState({
      email: '',
      password: '',
    });
  
    const { email, password } = realtor;
    const { setAlert } = alertContext
    const { login, error, isAuthenticated } = authContext
  
    
    useEffect(() => {
      if(isAuthenticated){
        props.history.push('/realtordashbord')
      }
      if(error === "Invalid Credentials") {
        setAlert(error, 'danger')
      }
  
      // eslint-disable-next-line
    }, [error, isAuthenticated,  props.history])
    
      const onChange = (e) => setRealtor({ ...realtor, [e.target.name]: e.target.value });

      const onSubmit = (e) => {
        e.preventDefault();
        if( email === '' || password === '') {
            setAlert('Please fill all field', 'danger')
        }
        else {
            login({ email, password })
        }
      };
  
     return (
        <div className="login-container" >
            <header className="login-header">
                <h3 className="heading-3">Your own home:</h3>
                <h1 className="heading-1">The ultimate personal freedom</h1>
                <div className="header__seenon-text">cozzy home</div>
            </header>
            <div className="section-login">
                <div className="row">
                    <div className="login">
                        <div className="login__form">
                            <form  className="form" onSubmit={onSubmit}>
                            <Alert />
                                <input 
                                    id='email'
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                    required
                                    className="form__input" 
                                    placeholder="email" 
                                />
                                <label 
                                    htmlFor="email" 
                                    className="form__label">
                                    Email
                                </label>
                                <input 
                                    id="password" 
                                    type="password" 
                                    name='password'
                                    placeholder="Password " 
                                    className="form__input" 
                                    onChange={onChange} 
                                    required
                                    minLength='6'
                                />
                                <label 
                                    htmlFor="name" 
                                    className="form__label">
                                    Password
                                </label>
                                <input 
                                    type="submit"  
                                    value="Signin" 
                                    name="submit" 
                                    className="btn btn--green" 
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
