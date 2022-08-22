import React, { useState,useContext } from 'react'
import Alert from '../layouts/Alerts'
import AlertContext from '../../context/alert/alertContext';
import './login.css'


const Login = () => {
    const alertContext = useContext(AlertContext)

    const [user, setUser] = useState({
        email: '',
        password: '',
      });
    
      const {  email, password } = user;
      const { setAlert } = alertContext


      const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

      const onSubmit = (e) => {
        e.preventDefault();
        if( email === '' || password === ''){
         setAlert('Please fill all field', 'danger')
        }
        else {
            setAlert('user already exists', 'danger')
        }
        
      };
    
  
     return (
        <div class="login-container" >
            <header class="login-header">
                <h3 class="heading-3">Your own home:</h3>
                <h1 class="heading-1">The ultimate personal freedom</h1>
                <div class="header__seenon-text">cozzy home</div>
            </header>
            <div class="section-login">
                <div class="row">
                    <div class="login">
                        <div class="login__form">
                            <form  class="form" onSubmit={onSubmit}>
                            <Alert />
                                <input 
                                    id='email'
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                    required
                                    class="form__input" 
                                    placeholder="email" 
                                />
                                <label 
                                    htmlFor="email" 
                                    class="form__label">
                                    Email
                                </label>
                                <input 
                                    id="password" 
                                    type="password" 
                                    name='password'
                                    placeholder="Password " 
                                    class="form__input" 
                                    onChange={onChange} 
                                    required
                                    minLength='6'
                                />
                                <label 
                                    htmlFor="name" 
                                    class="form__label">
                                    Password
                                </label>
                                <input 
                                    type="submit"  
                                    value="Signin" 
                                    name="submit" 
                                    class="btn btn--green" 
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
