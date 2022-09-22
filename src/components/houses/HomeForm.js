import React, { useContext, useEffect, useReducer, useState } from "react";
import HouseContext from "../../context/house/houseContext";

import { FaMap  } from 'react-icons/fa'
import { VscHeart  } from 'react-icons/vsc'
import { RiHeartFill  } from 'react-icons/ri'
import { GiHouseKeys  } from 'react-icons/gi'
import { AiOutlineAreaChart  } from 'react-icons/ai'
import { GiFamilyHouse  } from 'react-icons/gi'

import "../../css/HouseForm.css";
import AddForm from '../form/AddForm';

const HomeForm = () => {
  return (
    <div className="add-container">
        <header className="add-header">
            <h3 className="heading-3">Your own home:</h3>
            <div className="header__seenon-text">cozzy home</div>
            <h1 className="heading-1">The ultimate personal freedom</h1>
        </header>
        <div className="realtor__pictures">
            <img src="img/realtor-3.jpeg" alt="Couple with new house" className="realtor__img--2" style={{height:"350px"}}
            />
            <img src="img/story-2.jpeg" alt="New house" className="realtor__img--1"/>
        </div>
        <div className="realtor__content">
            <h3 className="heading-3 mb-sm">Welcome To Admin Page</h3>
            <h2 className="heading-2 heading-2--dark mb-md">
                &ldquo;The best Leader&rdquo;
            </h2>
            <p className="realtor__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
                harum volupta!
            </p>
            <button className="btn">Ketema Girma</button>
        </div>

        <div class="add__row">
            <div class="add__card">
                <div class="home__side home__side--front">
                    <img src="img/gal-1.jpeg" alt='gal-1' class="home__img" />
                    <h5 class="home__name">cozy country house</h5>
                    <div class="home__location"> 
                        <FaMap  />
                        <p>Addis</p> 
                    </div>
                    <div class="home__rooms"> 
                        <GiFamilyHouse />
                        <p>3 rooms</p>  
                    </div>
                    <div class="home__area">
                        <AiOutlineAreaChart /> 
                        <p> 345 m<sup>2</sup> </p> 
                    </div>
                    <div class="home__price"> 
                        <GiHouseKeys />
                        <p>2342 ETB</p> 
                    </div>
                    <a class="btn home__btn" href="realtro"> Delete </a>
                </div>

                <div class="home__side home__side--back home__side--back-1">
                    <AddForm />
                </div>
            </div> {/* add__card end*/}

            <div class="add__card">
                <div class="home__side home__side--front">
                    <img src="img/gal-1.jpeg" alt='gal-1' class="home__img" />
                    <h5 class="home__name">cozy country house</h5>
                    <div class="home__location"> 
                        <FaMap  />
                        <p>Addis</p> 
                    </div>
                    <div class="home__rooms"> 
                        <GiFamilyHouse />
                        <p>3 rooms</p>  
                    </div>
                    <div class="home__area">
                        <AiOutlineAreaChart /> 
                        <p> 345 m<sup>2</sup> </p> 
                    </div>
                    <div class="home__price"> 
                        <GiHouseKeys />
                        <p>2342 ETB</p> 
                    </div>
                    <a class="btn home__btn" href="realtro"> Delete </a>
                </div>

                <div class="home__side home__side--back home__side--back-1">
                    <AddForm />
                </div>
            </div> {/* add__card end*/}

            <div class="add__card">
                <div class="home__side home__side--front">
                    <img src="img/gal-1.jpeg" alt='gal-1' class="home__img" />
                    <h5 class="home__name">cozy country house</h5>
                    <div class="home__location"> 
                        <FaMap  />
                        <p>Addis</p> 
                    </div>
                    <div class="home__rooms"> 
                        <GiFamilyHouse />
                        <p>3 rooms</p>  
                    </div>
                    <div class="home__area">
                        <AiOutlineAreaChart /> 
                        <p> 345 m<sup>2</sup> </p> 
                    </div>
                    <div class="home__price"> 
                        <GiHouseKeys />
                        <p>2342 ETB</p> 
                    </div>
                    <a class="btn home__btn" href="realtro"> Delete </a>
                </div>

                <div class="home__side home__side--back home__side--back-1">
                    <AddForm />
                </div>

            </div> {/* add__card end*/}

            <div class="add__card">
                <div class="home__side home__side--front">
                    <img src="img/gal-1.jpeg" alt='gal-1' class="home__img" />
                    <h5 class="home__name">cozy country house</h5>
                    <div class="home__location"> 
                        <FaMap  />
                        <p>Addis</p> 
                    </div>
                    <div class="home__rooms"> 
                        <GiFamilyHouse />
                        <p>3 rooms</p>  
                    </div>
                    <div class="home__area">
                        <AiOutlineAreaChart /> 
                        <p> 345 m<sup>2</sup> </p> 
                    </div>
                    <div class="home__price"> 
                        <GiHouseKeys />
                        <p>2342 ETB</p> 
                    </div>
                    <a class="btn home__btn" href="realtro"> Delete </a>
                </div>

                <div class="home__side home__side--back home__side--back-1">
                    <AddForm />
                </div>
            </div> {/* add__card end*/}
        </div> {/* add__row end*/}
    {/* add-container end*/}
    </div> 
  );
};

export default HomeForm;
