import React, {Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa'
import { ImNotification } from 'react-icons/im'

import AuthContext from '../../context/auth/authContext';


const AuthLink = () => {
    const authContext = useContext(AuthContext)

    const { isAuthenticated, user ,logout } = authContext
  
    const onLogout = () => {
      logout()
    };

    const handler = () => {
  
    }
  
    const authLinks = (
      <Fragment>
        <div className="user-nav__user">
        Hi 
        <span className="user-nav__user-name"> {user && user.name}</span>
          <img 
            src="img/realtor-1.jpeg" 
            alt="realtor" 
            className="user-nav__user-photo" 
          />
        </div>
  
        <div className='nav__link'>
          <Link  to='/login' onClick={onLogout}>
            <span className='hide-sm'>Logout</span>
          </Link>
        </div>
      </Fragment>
    );
  
    const guestLinks = (
      <Fragment>
        <div className='nav__link'>
          <Link to='/register'>Register</Link>
        </div>
  
        <div className='nav__link'>
          <Link to='/login' >Login</Link>
        </div>
      </Fragment>
    );
    return (
      <div className="header__nav">
        <img src="img/logo.png" alt="logo" className="header__logo" />
        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <FaHeart />
                <span className="user-nav__notification">
                  {user && user.favourites.length}
                </span>
            </div>
            
            <div className="user-nav__icon-box">
                <ImNotification />
                <span className="user-nav__notification">
                  {user && user.message.length}
                </span>
            </div>

            {isAuthenticated? authLinks : guestLinks}
        </nav>
      </div>
   )
}

export default AuthLink;