import React, { useContext, useEffect, Fragment } from "react";

import RealtorHomeItem from './RealtorHomeItem'
import setAuthToken from '../../utils/setAuthToken';
import Spinner from '../layouts/Spinner'
import AddForm from './AddForm';

import HouseContext from "../../context/house/houseContext";

import "../../css/HouseForm.css";



if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const Header =() => {
    return (
        <header className="add-header">
            <h3 className="heading-3">Your own home:</h3>
            <div className="header__seenon-text">cozzy home</div>
            <h1 className="heading-1">The ultimate personal freedom</h1>
        </header>
    ) 
}
const RealtorContent = () => {
    return(
        <div className="realtor__content">
            <h3 className="heading-3 mb-sm">Welcome Back!</h3>
            <h2 className="heading-2 heading-2--dark mb-md">
                &ldquo;The best Leader&rdquo;
            </h2>
            <p className="realtor__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
                harum volupta!
            </p>
            <button className="btn">Ketema</button>
        </div>
    )
}

const RealtorPicture = () => {
    return (
        <div className="realtor__pictures">
            <img src="img/realtor-3.jpeg" alt="Couple with new house" className="realtor__img--2" style={{height:"350px"}}
            />
            <img src="img/story-2.jpeg" alt="New house" className="realtor__img--1"/>
        </div>
    )
}


const RealtorHomes = () => {
    const houseContext = useContext(HouseContext)
    const { houses, getHouses, loading } = houseContext
    useEffect(() => {
        getHouses()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <div className="add-container">
        <Header />
        <RealtorPicture />
        <RealtorContent />
        <div className = "edit__row">
            <AddForm />
        </div>
        {houses != null && !loading ? (
            <div className="add__row">
                { houses.map( home => { 
                    return <RealtorHomeItem home={ home } key={ home._id } />
                }) }
            </div>
            ) : <Spinner />
        }
    </div>
  );
};

export default RealtorHomes;
