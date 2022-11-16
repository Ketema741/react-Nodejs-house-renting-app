import React, { Fragment } from 'react'

import HomeFilter from '../houses/HomeFilter'

import Sidebar from './Sidebar'
import AuthLink from './AuthLink'


const Navbar = () => {
  return (
    <Fragment>
      <AuthLink />
      <Sidebar />
        
      <div className="header">
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <HomeFilter />
      </div>
    </Fragment>
  )
}

export default Navbar
