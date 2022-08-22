import React, { useState, useContext } from 'react'
import './login.css'
import Alert from '../layouts/Alerts'
import AlertContext from '../../context/alert/alertContext';

const Login = () => {
    const alertContext = useContext(AlertContext)
    const [user, setUser] = useState({
        name:'',
        email: '',
        password: '',
        password2: '',
      });
    
      const {  name, email, password, password2 } = user;
      const { setAlert } = alertContext

      const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

      const onSubmit = (e) => {
        e.preventDefault();
        if(name === '' || email === '' || password === ''){
        setAlert('Please fill all field', 'danger')
        }
        else if( password !== password2 ) {
        setAlert('password do not much', 'danger')
        } else {
        console.log({ name, email, password, password2 })
        }
        
      };
    
  
      return (
    <div class="login-container" style={style}>
        <header class="login-header">
            <h3 class="heading-3">Your own home:</h3>
            <h1 class="heading-1">The ultimate personal freedom</h1>
            <div class="header__seenon-text">cozzy home</div>
        </header>
        <div class="section-login">
            <div class="row">
                <div class="login">
                    <div class="login__form">
                        <Alert />
                        <form  class="form" onSubmit={onSubmit}>
                            <input 
                                id='name'
                                type='name'
                                name='name'
                                value={name}
                                onChange={onChange}
                                required
                                class="form__input" 
                                placeholder="name" 
                            />
                            <label 
                                htmlFor="name" 
                                class="form__label">
                                Name
                            </label>

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
                            id="password2" 
                            type="password" 
                            name='password2'
                            placeholder="Confirm Password " 
                            class="form__input" 
                            onChange={onChange} 
                            required
                            minLength='6'
                        />
                        <label 
                            htmlFor="name" 
                            class="form__label">
                            Confirm Password
                        </label>
                            <input 
                                type="submit"  
                                value="Signup" 
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
const style = {
  
}
export default Login
