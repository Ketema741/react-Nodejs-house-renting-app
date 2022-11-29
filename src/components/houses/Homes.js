import React, { useContext, useEffect, Fragment, useState } from 'react'

import HomeItem from './HomeItem'
import Spinner from '../layouts/Spinner'

import HouseContext from '../../context/house/houseContext'


const Homes = () => {
    const [cart, setCart] = useState([])

    const addToCart = (id) => {
        if (cart.indexOf(id) !== -1) return;
        setCart([...cart, id]);
        console.log(cart)
    };

    const removeFromCart = (id) => {
        const arr = cart.filter((_id) => _id !== id);
        setCart(arr);
        console.log(cart)
    }
    
    const houseContext = useContext(HouseContext)
    const { publichouses, getPublicHouses, filtered, loading } =  houseContext

    useEffect(() => {
        getPublicHouses()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="homes" id="homes">
            {publichouses != null && !loading ? (
                <Fragment>
                    {   
                        filtered !== null ? 
                        filtered.map( home => ( 
                            <HomeItem 
                                home={home} 
                                key={home._id} 
                                addToCart={addToCart} 
                                removeFromCart={removeFromCart} 
                            />
                        )) 
                        :
                        <Fragment>
                            <h1 className='heading-1 description'>Newest Listings</h1>
                            {publichouses.map( home => ( 
                                <HomeItem 
                                    home={home} 
                                    key={home._id}
                                    addToCart={addToCart} 
                                    removeFromCart={removeFromCart} 
                                 />
                            ))}
                        </Fragment>
                    }
                </Fragment>
                ) : <Spinner />
            } 
        </div>
    )
}

export default Homes

