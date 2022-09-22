import React, {Fragment} from 'react'

import AuthLink from '../layouts/AuthLink'
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer'

import "../../css/Realtor.css";


const RealtorDetail = () => {
    return(
        <div className="realtor__container">
            <Fragment>
                <AuthLink />
                <Sidebar />
                
                <div className="realtor__header">
                    <h1 className="heading-1">The ultimate personal freedom</h1>
                    <form className="search">
                        <input 
                            type="text" 
                            className="search__input" 
                            placeholder="Search realtors" 
                        />
                    </form>
                </div>
            </Fragment>

        <div className="top__realtors">
            <h3 className="heading-3">Top 3 Realtors</h3>
            <div className="realtors__list">
                <img src="img/realtor-1.jpeg" alt="Realtor 1" className="realtors__img" />
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">Jermia</h4>
                    <p className="realtors__sold">345 houses sold</p>
                </div>
            
                <img src="img/realtor-2.jpg" alt="Realtor 2" className="realtors__img" />
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">Betselot T.</h4>
                    <p className="realtors__sold">212 houses sold</p>
                </div>
            
                <img src="img/realtor-3.jpeg" alt="Realtor 3" className="realtors__img" />
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">Tola Ch.</h4>
                    <p className="realtors__sold">198 houses sold</p>
                </div>
            </div>
        </div>

        <section className="realtors" id="realtors">
            <div className="realtor">
                <div className="feature">
                <img className="feature__icon realX" src="" alt="realtor" />
                <h4 className="realtor__name">Ketema</h4>
                    <p className="feature__text">12house sold</p>
                    <p className="feature__text realtor__active">Active</p>
                    <p className="feature__text realtorX__text">Lives in: Addis</p>
                    <p className="feature__text ">kgirma363@gmail.com</p>
                    <p className="feature__text ">0912323811</p>
                </div>
            </div>

            <div className="realtor">
                <div className="feature">
                <img className="feature__icon realX" src="" alt="realtor" />
                <h4 className="realtor__name">Ketema</h4>
                    <p className="feature__text">12house sold</p>
                    <p className="feature__text realtor__active">Active</p>
                    <p className="feature__text realtorX__text">Lives in: Addis</p>
                    <p className="feature__text ">kgirma363@gmail.com</p>
                    <p className="feature__text ">0912323811</p>
                </div>
            </div>
        </section>

        <footer className="realtor__footer">
            <Footer />
        </footer>
    </div>
    )
}

export default RealtorDetail;