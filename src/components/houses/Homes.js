import React, { useState, Fragment } from 'react'
import HomeItem from './HomeItem'

const Homes = () => {
    const initialState = {
        homes: [
            {
                id:1,
                image:'img/house-1.jpeg',
                title:'cuzzy country house',
                location:'addis',
                rooms:23,
                area:234,
                price:10023

            },
            {
                id:2,
                image:'img/house-2.jpeg',
                title:'cuzzy country house',
                location:'addis',
                rooms:23,
                area:234,
                price:10023

            },
            {
                id:3,
                image:'img/house-3.jpeg',
                title:'modern vila',
                location:'Gonder',
                rooms:23,
                area:234,
                price:10023

            },
            {
                id:4,
                image:'img/house-4.jpeg',
                title:'modern vila',
                location:'Adama',
                rooms:23,
                area:234,
                price:10023

            },
        ]
    }
    const [state, setState] =useState(initialState)
    const { homes } = state
    

  return (

    <div className="homes" id="home">
    <h1 className='heading-1 description'>Newest Listings</h1>
    
    {homes.map(home =>{ 
        return <HomeItem home={home} />
    })}
    </div>
    
  )
}

export default Homes

