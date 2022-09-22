import React, { Fragment } from 'react';

import AuthLink from '../layouts/AuthLink';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';

import "../../css/HomeDetail.css";


const HomeDetail = ()=>{
    return(
        <div className="detail__container">

            <Fragment>
                <AuthLink />
                <Sidebar />
                <div className="detail__header">
                    <h1 className="heading-1">The ultimate personal freedom</h1>
                </div>
            </Fragment>

            <div className="realtor__pictures">
                <img src="img/realtor-3.jpeg" alt="Couple with new house" className="realtor__img--2" style={{height:"350px"}} />
                <img src="img/realtor-2.jpeg" alt="New house" className="realtor__img--1" />
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
           
            <section className="detail__homes" id="home">
                <div className="home">
                    <img src="img/gal-1.jpeg" alt="house_image" className="home__img" />
                    <svg className="home__like">
                    </svg> 
                    <h5 className="home__name">cozzy country house</h5>
                    <div className="home__location">
                        <svg>
                        </svg>
                        <p>Adama</p>
                    </div>
                    <div className="home__rooms">
                        <svg>
                        </svg>
                        <p>23 rooms</p>
                    </div>
                    <div className="home__area">
                        <svg>
                        </svg>
                        <p>231 m<sup>2</sup></p>
                    </div>
                    <div className="home__price">
                        <svg>
                        </svg>
                        <p>234ETB</p>
                    </div>
                    <a className="btn home__btn" href="home.php" style={{textDecoration: "none"}}>Back</a>
                </div>

                <div className="home">
                    <img src="img/gal-1.jpeg" alt="house_image" className="home__img" />
                    <svg className="home__like">
                    </svg> 
                    <h5 className="home__name">cozzy country house</h5>
                    <div className="home__location">
                        <svg>
                        </svg>
                        <p>Adama</p>
                    </div>
                    <div className="home__rooms">
                        <svg>
                        </svg>
                        <p>23 rooms</p>
                    </div>
                    <div className="home__area">
                        <svg>
                        </svg>
                        <p>231 m<sup>2</sup></p>
                    </div>
                    <div className="home__price">
                        <svg>
                        </svg>
                        <p>234ETB</p>
                    </div>
                    <a className="btn home__btn" href="home.php" style={{textDecoration: "none"}}>Back</a>
                </div>
            </section>

            <section className="gallery">
               
            </section>
            <footer className="detail__footer">
               <Footer />
            </footer>
        </div>
    )
}

export default HomeDetail;