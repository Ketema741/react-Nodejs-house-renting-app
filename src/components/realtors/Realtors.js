import React, { useContext, useEffect, Fragment } from 'react'

import AuthLink from '../layouts/RealtorAuthLink'
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer'

import "../../css/Realtor.css";


import RealtorItem from './RealtorItem'
import Spinner from '../layouts/Spinner'

import RealtorContext from '../../context/realtor/realtorContext'


const RealtorHeader = () => {
    return (
        <Fragment>
            <AuthLink />
            <Sidebar />
            
            <div className="realtor__header">
                <h1 className="heading-1">
                    The ultimate personal freedom
                </h1>
                <form className="search">
                    <input 
                        type="text" 
                        className="search__input" 
                        placeholder="Search realtors" 
                    />
                </form>
            </div>
        </Fragment>
    )
}


const Realtors = () => {

    const realtorContext = useContext(RealtorContext)
    const { realtors, getRealtors, filtered } =  realtorContext

    useEffect(() => {
        getRealtors()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <div className="realtor__container">
            <RealtorHeader />
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
        {realtors != null ? (
            <Fragment>
                {   
                    filtered !== null ? 
                    filtered.map( realtor => ( 
                    <RealtorItem realtor={realtor} key={realtor._id} />
                    )) 
                    :
                    <Fragment>
                        <h1 className='heading-1 description'>Newest Listings</h1>
                        {realtors.map( realtor => ( 
                            <RealtorItem realtor={realtor} key={realtor._id} />
                        ))}
                    </Fragment>
                }
            </Fragment>
            ) : <Spinner />
        } 
        </section>

        <footer className="realtor__footer">
            <Footer />
        </footer>
    </div>
    )
}

export default Realtors;