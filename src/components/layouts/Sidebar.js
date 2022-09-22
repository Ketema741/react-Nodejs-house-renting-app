import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineSell } from 'react-icons/md'
import { BsCreditCard2Back } from 'react-icons/bs'
import { BsCalendar2Month } from 'react-icons/bs'

const Sidebar = () => {
    return(
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
    )
}

export default Sidebar;