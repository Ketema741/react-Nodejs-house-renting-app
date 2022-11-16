import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineSell } from 'react-icons/md'
import { BsCreditCard2Back } from 'react-icons/bs'
import { BsCalendar2Month } from 'react-icons/bs'

const Sidebar = () => {
    return(
        <nav className="sdbar">
            <ul className="sd-nav">
                <li className="sd-nav__item sd-nav__item--active">
                    <Link to="/" className="sd-nav__link">
                        <AiOutlineHome className="sd-nav__icon" />
                        <span>HOME</span>
                    </Link>
                </li>
                
                <li className="sd-nav__item">
                    <Link to="/rent" className="sd-nav__link">
                      <BsCalendar2Month className="sd-nav__icon" />
                      <span>Rent</span>
                    </Link>
                </li>


                <li className="sd-nav__item">
                    <Link to="/sell" className="sd-nav__link">
                        <BsCreditCard2Back className="sd-nav__icon" />
                        <span>Buy </span>
                    </Link>
                </li>
                <li className="sd-nav__item">
                    <Link to="/sell" className="sd-nav__link">
                        <MdOutlineSell className="sd-nav__icon" />
                        <span>Sell </span>
                    </Link>
                </li>
                <li className="sd-nav__item">
                    <Link to="/realtors" className="sd-nav__link">
                        <span>Realtor </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;