import React, {  useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { FaMap, FaRegCommentAlt  } from 'react-icons/fa'
import { VscHeart  } from 'react-icons/vsc'
import { RiHeartFill  } from 'react-icons/ri'
import { GiHouseKeys  } from 'react-icons/gi'
import { AiOutlineAreaChart  } from 'react-icons/ai'
import { GiFamilyHouse  } from 'react-icons/gi'

import HouseContext from '../../context/house/houseContext'

const initialState = {
		likes:true,
		favourites:[],
		message:null,
		controler:false
	}
const HomeItem = (props) => {
	const { home } = props
	const [state, setState] =useState(initialState)
	const {likes, favourites, message, controler } = state

    const houseContext = useContext(HouseContext)
    const { house, getHouse } =  houseContext

	const navigate = useNavigate()

	const { 
		title, 
		description, 
		location, 
		area, 
		bed,
		bath, 
		price, 
		propertyType,
		garage,
		yearBuilt,
		houseImages,
			_id
		} = home

	

	
	const like = () => {
		if (likes === true) {
			setState({likes: false})
		} else {
			setState({likes: true})
		}
	}

	const handleView = () => {
		getHouse(_id)
		navigate(`house/${_id}`)
		
	}
	
	
  return (
    <div className="home">
			<img src={houseImages[0].url} alt={title} className="home__img" />
			
			{likes? 
				(<VscHeart className="home__like" color='red' onClick={like} />)
				:
				(<RiHeartFill className="home__like" color='red' onClick={like} />)}
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
