import React, { useContext, useState } from "react";
import HouseContext from "../../context/house/houseContext";
import Warning from '../modal/Warning'

import { FaMap  } from 'react-icons/fa'
import { GiHouseKeys  } from 'react-icons/gi'
import { AiOutlineAreaChart  } from 'react-icons/ai'
import { GiFamilyHouse  } from 'react-icons/gi'


const RealtorHomeItem = ({ home }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const houseContext = useContext(HouseContext)
    const { deleteHouse, setCurrent, clearCurrent } = houseContext

    const { _id } = home
    const onDelete = () => {
        deleteHouse(_id)
        setModalOpen(false)
        clearCurrent()
    }
    return(
           <div className="add__card">
               <div className="home__side home__side--front">
                   <img src={home.houseImages[0].url} alt='gal-1' className="home__img realtor__img" />
                   <h5 className="home__name">{ home.title }</h5>
                   <div className="home__location"> 
                       <FaMap  />
                       <p>{ home.location }</p> 
                   </div>
                   <div className="home__rooms"> 
                       <GiFamilyHouse />
                       <p>{ home.bed } bed rooms</p>  
                   </div>
                   <div className="home__area">
                       <AiOutlineAreaChart /> 
                       <p> { home.area } m<sup>2</sup> </p> 
                   </div>
                   <div className="home__price"> 
                       <GiHouseKeys />
                       <p>{home.price} ETB</p> 
                   </div>
                   <button 
            
                        className="btn home__btn" 
                        >  
                    </button>
                </div>
                
               <div className="home__side home__side--back home__side--back-1">
                    <button
                        onClick={() => setModalOpen(true)}
                        className="btn home__btn" 
                        > Delete 
                    </button>
                    <button 
                        onClick={() => setCurrent(home)}
                        className="btn home__btn" 
                        > Edit 
                    </button>                
                </div>
                {modalOpen && <Warning onDelete = {onDelete} setModalOpen={setModalOpen} />}
        </div>
    )
}

export default RealtorHomeItem