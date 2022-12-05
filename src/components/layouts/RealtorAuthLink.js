import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

import AuthContext from "../../context/realtorAuth/authContext";
import RealtorContext from "../../context/realtor/realtorContext";

const AuthLink = () => {
  const authContext = useContext(AuthContext);
  const realtorContext = useContext(RealtorContext);

  const { isRealtorAuthenticated, realtor, logout } = authContext;

  const { favourites } = realtorContext

 

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <div className="user-nav__user">
        <div className="dropdown ">
          <div className="drodbtn">
            <BiUserCircle className="nav__profile-icon" />
          </div>
          <div className="dropdown-content">
            <div className="user-nav__user-email ">
              {" "}
              {realtor && realtor.email}
            </div>
            <Link to="/edit-profile" className="nav__profile">
              <CgProfile className="nav__profile-icon" />
              Profile
            </Link>
            {realtor && realtor.type === "realtor" && (
              <Link to="/realtordashboard" className="nav__profile">
                <MdDashboard className="nav__profile-icon" />
                Dashboard
              </Link>
            )}
            <Link to="/" className="nav__profile" onClick={onLogout}>
              <RiLogoutCircleLine className="nav__profile-icon" />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link className="nav__link" to="/realtorregister">
        Register
      </Link>
      <Link className="nav__link" to="/realtorlogin">
        Login
      </Link>
    </Fragment>
  );

  const userFavourite = (
    <div className="user-nav__icon-box">
      {realtor && (
        <Fragment>
          {favourites && (
            <span className="user-nav__notification">
              {favourites.length}
            </span>
          )}
        </Fragment>
      )}
      <div className="dropdown ">
        <div className="drodbtn">
          <MdFavoriteBorder className="nav__profile-icon" />
        </div>
        <div className="dropdown-content">
          <div className="user-nav__user-email ">
            {" "}
            {favourites && (
              <div>
                You Have {favourites.length} Houses In Your Favourites
              </div>
            )}
          </div>
          <Link to="/favourites" className="nav__profile">
            <MdFavoriteBorder className="nav__profile-icon" />
            Favourites
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="header__nav">
      <nav className="user-nav">
        {isRealtorAuthenticated && userFavourite}

        {isRealtorAuthenticated ? authLinks : guestLinks}
      </nav>
    </div>
  );
};

export default AuthLink;
