import React, {  useState } from 'react'
import { FaMap  } from 'react-icons/fa'
import { VscHeart  } from 'react-icons/vsc'
import { RiHeartFill  } from 'react-icons/ri'
import { GiHouseKeys  } from 'react-icons/gi'
import { AiOutlineAreaChart  } from 'react-icons/ai'
import { GiFamilyHouse  } from 'react-icons/gi'


const HomeItem = ({ home }) => {
	const initialState = {
		likes:true,
		favourites:[],
		message:null,
		controler:false
	}

	const [state, setState] =useState(initialState)

	const {likes, favourites, message, controler } = state

	const like = () => {
		if (likes === true) {
			setState({likes:false})
		} else {
			setState({likes:true})
		}
	}
	
  return (
    <div className="home">
			<img src={home.image} alt={home.title} className="home__img" />
			
			{likes? 
				(<VscHeart className="home__like" color='red' onClick={like} />)
				:
				(<RiHeartFill className="home__like" color='red' onClick={like} />)}

			<h5 className="home__name">{home.title}</h5>

			<div className="home__location">
                <FaMap  />
				<p>{home.location}</p>
			</div>
			
			<div className="home__rooms">
				<GiFamilyHouse />
				<p>{home.rooms} rooms</p>
			</div>
			<div className="home__area">
				<AiOutlineAreaChart />
				<p>{home.area} m<sup>2</sup></p>
			</div>
			<div className="home__price">
				<GiHouseKeys />
				<p>{home.price} ETB</p>
			</div>
			<a className="btn home__btn" href='realtro' style={{textDecoration:"none"}}>Contact realtor</a>
		</div>
  )
}

export default HomeItem
