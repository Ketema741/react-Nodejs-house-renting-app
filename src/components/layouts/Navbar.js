import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { ImNotification } from 'react-icons/im'
import { MdOutlineSell } from 'react-icons/md'
import { BsCreditCard2Back } from 'react-icons/bs'
import { BsCalendar2Month } from 'react-icons/bs'

import AuthContext from '../../context/auth/authContext';




const Navbar = () => {
 
  const authContext = useContext(AuthContext)

  const { isAuthenticated, user ,logout } = authContext
  console.log(user)


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
    <Fragment>
        <div className="header__nav">
            <img src="img/logo.png" alt="logo" className="header__logo" />
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <FaHeart />
                    <span className="user-nav__notification">{user && user.favourites.length}</span>
                </div>
                
                <div className="user-nav__icon-box">
                    <ImNotification />
                    <span className="user-nav__notification">{user && user.message.length}</span>
                </div>
                {isAuthenticated? authLinks : guestLinks}
                
            </nav>
        </div>

       
        <nav className="sdbar">
            <ul className="sd-nav">
                <li className="sd-nav__item sd-nav__item--active">
                    <a href="home" className="sd-nav__link">
                    <AiOutlineHome className="sd-nav__icon" />
                    <span>HOME</span>
                    </a>
                </li>
                
                <li className="sd-nav__item">
                    <a href="realtors" className="sd-nav__link">
                      <BsCalendar2Month className="sd-nav__icon" />
                      <span>Rent</span>
                    </a>
                </li>

                <li className="sd-nav__item">
                    <a href="about" className="sd-nav__link">
                        <BsCreditCard2Back className="sd-nav__icon" />
                        <span>Buy</span>
                    </a>
                </li>
                <li className="sd-nav__item">
                    <a href="/login" className="sd-nav__link">
                        <MdOutlineSell className="sd-nav__icon" />
                        <span>Sell </span>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="header">
            <h1 className="heading-1">The ultimate personal freedom</h1>
            <form className="search">
            <input 
            type="text" 
            className="search__input" 
            placeholder="Search houses" 
            />
            </form>
        </div>
    </Fragment>
  )
}

export default Navbar
