import React, {  useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { FaMap  } from 'react-icons/fa'
import { VscHeart  } from 'react-icons/vsc'
import { RiHeartFill  } from 'react-icons/ri'
import { GiHouseKeys  } from 'react-icons/gi'
import { AiOutlineAreaChart  } from 'react-icons/ai'
import { GiFamilyHouse  } from 'react-icons/gi'

import HouseContext from '../../context/house/houseContext'
import AuthContext from '../../context/realtorAuth/authContext'


const HomeItem = ({ home, addToCart, removeFromCart }) => {
	const [like, setLike] =useState(false)


    const houseContext = useContext(HouseContext)
    const authContext = useContext(AuthContext)

    const { house, getHouse } =  houseContext
	const { realtor } = authContext

	

	
	let favouritesId = []
	useEffect(()=>{
		if(realtor.favourites){
			realtor.favourites.forEach(house =>{
				favouritesId.push(house._id)
			})
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [realtor])
	console.log(favouritesId)

	const navigate = useNavigate()
	const { 
		title, 
		location, 
		area, 
		bed,
		price, 
		houseImages,
		_id
	} = home


	
	const onLike = () => {
		if (_id === true) {
			setLike(false)
			removeFromCart(_id)
		} else {
			setLike(true)
			addToCart(_id)
		}
	}

	const handleView = () => {
		getHouse(_id)
		console.log(house)
		navigate(`house/${_id}`)
	}
	
	
  return (
    <div className="home">
			<img src={houseImages.length >=1 ? houseImages[0].url:'/public/img/gal-1.jpeg'} alt={title} className="home__img" />
			 
			{like? 
				(<VscHeart className="home__like"  onClick={onLike} />)
				:
				(<RiHeartFill className="home__like"  onClick={onLike} />)}
			<h5 className="home__name">{title}</h5>

			<div className="home__location">
                <FaMap  />
				<p>{location}</p>
			</div>
			
			<div className="home__rooms">
				<GiFamilyHouse />
				<p>{bed} rooms</p>
			</div>
			<div className="home__area">
				<AiOutlineAreaChart />
				<p>{area} m<sup>2</sup></p>
			</div>
			<div className="home__price">
				<GiHouseKeys />
				<p>{price} ETB</p>
			</div>
			<button onClick={handleView} className="btn home__btn" >View</button>
		</div>
  )
}

export default HomeItem
