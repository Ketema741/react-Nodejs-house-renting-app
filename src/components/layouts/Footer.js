import React from "react";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav__item">
          <a href="Home" className="nav__link">
            Find your dream home
          </a>
        </li>
        <li className="nav__item">
          <a href="Request" className="nav__link">
            Request proposal
          </a>
        </li>
        <li className="nav__item">
          <a href="planner" className="nav__link">
            Download home planner
          </a>
        </li>
        <li className="nav__item">
          <a href="Contact" className="nav__link">
            Contact us
          </a>
        </li>
        <li className="nav__item">
          <a href="property" className="nav__link">
            Submit your property
          </a>
        </li>
        <li className="nav__item">
          <a href="work" className="nav__link">
            Come work with us!
          </a>
        </li>
      </ul>
      <p className="copyright">&copy; Copyright 2022 by Ketema Girma.</p>
    </footer>
  );
};

export default Footer;
