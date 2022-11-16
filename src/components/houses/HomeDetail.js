import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom'

import AuthLink from '../layouts/RealtorAuthLink';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';
import Spinner from '../layouts/Spinner'

import HouseContext from '../../context/house/houseContext'

import "../../css/HomeDetail.css";

const HomeDetail = () => {

    const houseContext = useContext(HouseContext)
    const { house } =  houseContext

    
    return ( 
        <div className="detail__container">
            <Fragment>
                <AuthLink />
                <Sidebar />
                <div className="detail__header">
                    <h1 className="heading-1">The ultimate personal freedom</h1>
                </div>
            </Fragment>

            <div className="realtor__pictures">
                <img src="/img/realtor-3.jpeg" alt="Couple with new house" className="realtor__img--2" style={{height:"350px"}} />
                <img src="/img/story-2.jpeg" alt="New house" className="realtor__img--1" />
            </div>

            <div className="realtor__content">
                <h3 className="heading-3 mb-sm"> Ketema </h3>
                <h2 className="heading-2 heading-2--dark mb-md">&ldquo;Top Realtor&rdquo;</h2>
                <p className="realtor__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
                </p>
                <address className="btn">
                    <a type="email" title ="email me" href='mailto:kgirma363gmail.com' className="btn">Email me</a>
                </address>
            </div>
            {house != null ? (
                <Fragment>
                    <section className="detail__homes" id="home">
                        <div className="home">
                            <img src={house.houseImages[0].url} alt="house_image" className="home__img" />
                            <svg className="home__like">
                            </svg> 
                            <h5 className="home__name">{house.title}</h5>
                            <div className="home__location">
                                <svg>
                                </svg>
                                <p>{house.location}</p>
                            </div>
                            <div className="home__rooms">
                                <svg>
                                </svg>
                                <p>{house.bed} rooms</p>
                            </div>
                            <div className="home__area">
                                <svg>
                                </svg>
                                <p>{house.area} m<sup>2</sup></p>
                            </div>
                            <div className="home__price">
                                <svg>
                                </svg>
                                <p>{house.price} ETB</p>
                            </div>
                            <Link className="btn home__btn" to="/" style={{textDecoration: "none"}}>Back</Link>
                        </div>

                    </section>

                    <section className="gallery">
                    
                    </section>
                </Fragment>

            ) : <Spinner />
        }
            
            <footer className="detail__footer">
               <Footer />
            </footer>
        </div>
    )
}

export default HomeDetail;