import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
const SideBar = ({ realtor }) => {
  return (
    <nav className="profile__sidebar">
      <ul className="profile__side-nav">
        <li className="sd-nav__item sd-nav__item">
          <Link to="/" className="sd-nav__link">
            <AiOutlineHome className="nav__profile-icon" />
            <span>Home</span>
          </Link>
        </li>
        <li className="sd-nav__item sd-nav__item--active">
          <Link to="/user/edit-profile" className="sd-nav__link">
            <CgProfile className="nav__profile-icon" />
            <span>Profile</span>
          </Link>
        </li>
        {realtor && realtor.type === "realtor" && (
          <li className="sd-nav__item">
            <Link to="/realtordashboard" className="sd-nav__link">
              <MdDashboard className="nav__profile-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
        )}
        <li className="sd-nav__item">
          <Link to="/favourites" className="sd-nav__link">
            <MdFavoriteBorder className="nav__profile-icon" />
            <span>Favorites</span>
          </Link>
        </li>
        <li className="sd-nav__item">
          <Link to="/user/favorite" className="sd-nav__link">
            <AiOutlineLogout className="nav__profile-icon" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
