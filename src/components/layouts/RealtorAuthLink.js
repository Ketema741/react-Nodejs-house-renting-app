import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';

import { ImNotification } from 'react-icons/im'

import AuthContext from '../../context/realtorAuth/authContext';


const AuthLink = () => {
    const authContext = useContext(AuthContext)

    const { isRealtorAuthenticated, realtor, logout } = authContext
  
    const onLogout = () => {
      logout()
    };
  
    const authLinks = (
      <Fragment>
        <div className="user-nav__user">
        Hi &nbsp;
        <span className="user-nav__user-name"> {realtor &&  realtor.name.split(" ")[0]}&nbsp;</span>
          <img 
            src="img/realtor-1.jpeg" 
            alt="realtor" 
            className="user-nav__user-photo" 
          /> 
        </div>
  
        <Link className='nav__link' to='/realtors' onClick={onLogout}>
          <span className='hide-sm'>Logout</span>
        </Link>
      </Fragment>
    );
  
    const guestLinks = (
      <Fragment>
        <Link className='nav__link' to='/realtorregister'>Register</Link>
        <Link className='nav__link' to='/realtorlogin' >Login</Link>
      </Fragment>
    );
    return (
      <div className="header__nav">
        <nav className="user-nav">
            
          <div className="user-nav__icon-box">
              <ImNotification />
              <span className="user-nav__notification">
                0 
              </span>
          </div>

          {isRealtorAuthenticated? authLinks : guestLinks}
        </nav>
      </div>
   )
}

export default AuthLink;