import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';

import { ImNotification } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { MdDashboard } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'

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
            <div className="dropdown ">
              <div  className='drodbtn'> 
                  <BiUserCircle className="nav__profile-icon" />
             
                
               
              </div>
              <div className="dropdown-content">
             
              <div className="user-nav__user-email "> {realtor &&  realtor.email}</div>
                <Link to="/edit-profile" className="nav__profile">
                  <CgProfile className='nav__profile-icon' />
                  Profile 
                </Link>
                {realtor && realtor.type === 'realtor' &&
                <Link to="/realtordashboard" className="nav__profile" >
                  <MdDashboard className='nav__profile-icon' />
                  Dashboard 
                </Link>
               }
                <Link to="/" className="nav__profile" onClick={onLogout}>
                  <RiLogoutCircleLine className='nav__profile-icon' />
                  Logout 
                </Link>
              </div>
            </div> 
        </div>
  
        
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
              <ImNotification  />
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