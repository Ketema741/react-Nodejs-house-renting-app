import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa'
import { ImNotification } from 'react-icons/im'


import AuthContext from '../../context/auth/authContext';

import Sidebar from './Sidebar'
import AuthLink from './AuthLink'




const Navbar = () => {

  return (
    <Fragment>
      <AuthLink />
      <Sidebar />
        
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
