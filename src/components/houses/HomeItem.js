import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { FaMap } from 'react-icons/fa'
// import { VscHeart  } from 'react-icons/vsc'
// import { RiHeartFill  } from 'react-icons/ri'
import { GiHouseKeys  } from 'react-icons/gi'
import { AiOutlineAreaChart  } from 'react-icons/ai'
import { GiFamilyHouse  } from 'react-icons/gi'

import HouseContext from '../../context/house/houseContext'


const HomeItem = ({ home, addToCart, removeFromCart }) => {

    const houseContext = useContext(HouseContext)

    const { house, getHouse } =  houseContext
	
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


	const handleView = () => {
		getHouse(_id)
		navigate(`/house/${_id}`)
	}
	
	
  	return (
    	<div className="home">
			<img src={houseImages.length >=1 ? houseImages[0].url:'/public/img/gal-1.jpeg'} alt={title} className="home__img" />	 
			
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
