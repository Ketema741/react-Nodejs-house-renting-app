import React, { useContext, useState} from 'react'
import { Link } from 'react-router-dom'

import Alert from '../layouts/Alerts'
import Footer from '../layouts/Footer'

import { AiOutlineLogout } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdFavoriteBorder } from 'react-icons/md'



import AuthLink from '../layouts/RealtorAuthLink'

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/realtorAuth/authContext'
import '../../css/Profile.css'


const UserProfile = () => {

  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)
  const [user, setUser] = useState({
      name:'',
      email: '',
      password: '',
      password2: '',
      phone: '',
    });
  
    const {  
        name, 
        email, 
        password, 
        password2,
        phone, 
    } = user;
    const { setAlert } = alertContext
    const { userRegister} = authContext

   

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();
      if(name === '' || email === '' || password === '' || phone === '' ){
          setAlert('Please fill all field', 'danger')
      }
      else if( password !== password2 ) {
          setAlert('password do not much', 'danger')
      } else {
          userRegister({ 
              name, 
              email, 
              password,
              phone
          })
      }
    };

  return (
    <div className='profile__container'>
        <AuthLink />
        <nav className="profile__sidebar">
            <ul className="profile__side-nav">
                <li className="sd-nav__item sd-nav__item">
                    <Link to="/" className="sd-nav__link">
                        <AiOutlineHome className='nav__profile-icon' />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="sd-nav__item sd-nav__item--active">
                    <Link to="/user/edit-profile" className="sd-nav__link">
                        <CgProfile className='nav__profile-icon' />
                        <span>Profile</span>
                    </Link>
                </li>
                <li className="sd-nav__item">
                    <Link to="/user/favorite" className="sd-nav__link">
                        <MdFavoriteBorder className='nav__profile-icon' />
                    <span>Favorite</span>
                    </Link>
                </li>
                <li className="sd-nav__item">
                    <Link to="/user/favorite" className="sd-nav__link">
                        <AiOutlineLogout className='nav__profile-icon' />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className="profile__header"> </div>
        <div className="section__update">
            <div className="row">
                <div className="login">
                    <div className="login__form">
                        <Alert />
                        <form className="form" onSubmit={onSubmit}>
                            <input 
                                id='name'
                                type='text'
                                name='name'
                                value={name}
                                onChange={onChange}
                                required
                                className="form__input" 
                                placeholder="full name" 
                            />
                            <label 
                                htmlFor="name" 
                                className="form__label">
                                Name
                            </label>

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
                            id="phone" 
                            type="text" 
                            name='phone'
                            placeholder="phone " 
                            className="form__input" 
                            onChange={onChange} 
                            required
                        />
                        <label 
                            htmlFor="phone" 
                            className="form__label">
                            phone
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
                                htmlFor="password" 
                                className="form__label">
                                Password
                            </label>
                            
                            <input 
                            id="password2" 
                            type="password" 
                            name='password2'
                            placeholder="Confirm Password " 
                            className="form__input" 
                            onChange={onChange} 
                            required
                            minLength='6'
                        />
                        <label 
                            htmlFor="password2" 
                            className="form__label">
                            Confirm Password
                        </label>
                            
                        
                        <input 
                            type="submit"  
                            value="Update" 
                            name="submit" 
                            className="btn btn--green" 
                        />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='profile__footer'>
            <Footer />
        </div>
    </div>
  )
}

export default UserProfile;
