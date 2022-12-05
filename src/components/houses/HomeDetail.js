import React, { Fragment, useContext } from "react";

import { FaMap } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { GiHouseKeys } from "react-icons/gi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiHomeGarage } from "react-icons/gi";

import AuthLink from "../layouts/RealtorAuthLink";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Spinner from "../layouts/Spinner";
import ImageSlider from "./ImageSlider";

import HouseContext from "../../context/house/houseContext";
import RealtorContext from "../../context/realtor/realtorContext";
import AuthContext from "../../context/realtorAuth/authContext";

import "../../css/HomeDetail.css";
import "../../css/test.css";

const HomeDetail = () => {
  const houseContext = useContext(HouseContext);
  const realtorContext = useContext(RealtorContext);
  const authContext = useContext(AuthContext);

  const { house } = houseContext;
  const { addToFavourite, favourites } = realtorContext;
  const { realtor } = authContext;

  const addToCartHandler = () => {
    if (!favourites.includes(house)) {
      addToFavourite(realtor, house);
      console.log(favourites);
    } else {
      console.log("house already added to favourites");
    }
  };
  return (
    <div className="detail__container">
      <Fragment>
        <AuthLink />
        <Sidebar />
        <div className="detail__header">
          <h1 className="heading-1">House Details</h1>
        </div>
      </Fragment>

      <div className="realtor__pictures">
        <img
          src="/img/realtor-3.jpeg"
          alt=" house"
          className="realtor__img--2"
          style={{ height: "350px" }}
        />
        <img
          src="/img/story-2.jpeg"
          alt="New house"
          className="realtor__img--1"
        />
      </div>

      <div className="realtor__content">
        <h3 className="heading-3 mb-sm"> Ketema </h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;Top Realtor&rdquo;
        </h2>
        <p className="realtor__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <address className="btn">
          <a
            type="email"
            title="email me"
            href="mailto:kgirma363gmail.com"
            className="btn"
          >
            Email me
          </a>
        </address>
      </div>
      {house != null ? (
        <Fragment>
          <section className="detail__homes" id="home">
            <div className="detail__home">
              <img
                src="/img/svg/select_house.svg"
                alt="apartama"
                className="detail__home-img"
              />
              <h5 className="detail__home-name">{house.propertyType}</h5>
              <div className="home__location">
                <FaMap />
                <p>{house.location}</p>
              </div>
              <div className="home__rooms">
                <FaBed />
                <p>{house.bed} bed rooms</p>
              </div>
              <div className="home__rooms">
                <FaBath />
                <p>{house.bath} bath rooms</p>
              </div>
              <div className="home__rooms">
                <GiHomeGarage />
                <p>{house.garage ? house.garage : 0} garages</p>
              </div>
              <div className="home__area">
                <AiOutlineAreaChart />
                <p>
                  {house.area} m<sup>2</sup>
                </p>
              </div>
              <div className="home__area">
                <FaHammer />
                <p>Built in {" " + house.yearBuilt} </p>
              </div>
              <div className="home__price">
                <GiHouseKeys />
                <p>{house.price} ETB</p>
              </div>
              <button className="btn home__btn" onClick={addToCartHandler}>
                Add to favourites
              </button>
            </div>
          
              <ImageSlider slides={house.houseImages} />
          </section>
        </Fragment>
      ) : (
        <Spinner />
      )}

      <div className="description__container">
        <h1 className="heading-2"> More About This Property </h1>
        <div className="mega-menu">
          <ul>
            <li className="menu-item menu-2">
              <a className="heading-3" href="#x">
                Property Overview
              </a>
              <div className="mega-submenu">
                <h2 className="heading-3">Property Details</h2>
                <div className="submenu-content">
                  <div className="section links">
                    <ul>
                      <li>
                        <a href="#2"> description not provided</a>
                      </li>
                    </ul>
                  </div>

                  <div className="section featured-product">
                    <div className="product-detail">
                      <img
                        src="/img/svg/choosing_house.svg"
                        alt="apartama"
                        className="detail__home-img"
                      />

                      <div className="product-desc">
                        <a className="title" href="#s"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="menu-item menu-2">
              <a className="heading-3" href="#x">
                Schools
              </a>
              <div className="mega-submenu">
                <h2 className="heading-3">Nearby Schools</h2>
                <div className="submenu-content">
                  <div className="section links">
                    <ul>
                      <li>
                        <a href="#1">middle school</a>
                      </li>
                      <li>
                        <a href="#2">high school</a>
                      </li>
                    </ul>
                  </div>

                  <div className="section featured-product">
                    <div className="product-detail">
                      <img
                        src="/img/svg/education.svg"
                        alt="apartama"
                        className="detail__home-img"
                      />

                      <div className="product-desc">
                        <a className="title" href="#s">
                          Contact the school or district directly to verify
                          enrollment eligibility
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="menu-item menu-2">
              <a className="heading-3" href="#x">
                Monthly Payment
              </a>
              <div className="mega-submenu">
                <h2 className="heading-3">Monthly Payment</h2>

                <div className="submenu-content">
                  <div className="section links">
                    <ul>
                      <li>
                        <a href="#1">Principal Interest:</a>
                      </li>
                      <li>
                        <a href="#2"> Property tax:</a>
                      </li>
                      <li>
                        <a href="#2"> Home Insurance:</a>
                      </li>
                    </ul>
                  </div>
                  <div className="section featured-product">
                    <div className="product-detail">
                      <img
                        src="/img/svg/payments.svg"
                        alt="apartama"
                        className="detail__home-img"
                      />
                      <div className="product-desc">
                        <a className="title" href="#s">
                          Total: 30
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="menu-item menu-2">
              <a className="heading-3" href="#x">
                Neighborhood
              </a>
              <div className="mega-submenu">
                <h2 className="heading-3">Nearby Neighborhoods</h2>
                <div className="submenu-content">
                  <div className="section links">
                    <ul>
                      <li>
                        <a href="#1">Downtown Tulu Dimtu</a>
                      </li>
                      <li>
                        <a href="#2">Menga village</a>
                      </li>
                    </ul>
                  </div>

                  <div className="section featured-product">
                    <div className="product-detail">
                      <img
                        src="/img/svg/neighbors.svg"
                        alt="apartama"
                        className="detail__home-img"
                      />
                      <div className="product-desc">
                        <a className="title" href="#s">
                          This home has a medium noise level for the surrounding
                          area
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="menu-item menu-2">
              <a className="heading-3" href="#x">
                Environmental Risk
              </a>
              <div className="mega-submenu">
                <h2 className="heading-3">Environmental Risk</h2>
                <div className="submenu-content">
                  <div className="section links">
                    <ul>
                      <li>
                        <a href="#1">Flood Factor™:Minimal</a>
                      </li>
                      <li>
                        <a href="#2">Fire Factor™:Minimal</a>
                      </li>
                    </ul>
                  </div>

                  <div className="section featured-product">
                    <div className="product-detail">
                      <img
                        src="/img/svg/nature.svg"
                        alt="apartama"
                        className="detail__home-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <footer className="detail__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeDetail;
