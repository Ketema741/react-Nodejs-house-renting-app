import React, { useReducer } from 'react';
import axios from 'axios';
import HouseContext from './houseContext';
import houseReducer from './houseReducer';

import {
  GET_HOUSES,
  ADD_HOUSE,
  DELETE_HOUSE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_HOUSE,
  FILTER_HOUSES,
  CLEAR_HOUSES,
  CLEAR_FILTER,
  HOUSE_ERROR
} from '../types';



const Housestate = (props) => {
  const initialState = {
    houses:null,
    current:null,
    filtered:null,
  };

  const [state, dispatch] = useReducer(houseReducer, initialState);
  
  
  // Get Houses
 const getHouses = async () => {
  try {
    const res = await axios.get('api/houses');

    dispatch({
      type: GET_HOUSES,
      payload: res.data
    });
    } catch (err) {
    dispatch({
      type: HOUSE_ERROR,
      payload: err.response.msg
    });
    }
  };

  // add house
  const addHouse = async(house)=>{
    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    }

    try {
      const res = await axios.post('api/houses', house, config)
      dispatch({ type:ADD_HOUSE, payload:res.data })
    } catch(error) {
      dispatch({ type:HOUSE_ERROR })
    }
  
  }


  // clear Houses
  const clearHouses = () => {
    dispatch({ type:CLEAR_HOUSES })
  }

    
  // Delete House
  const deleteHouse = async (_id) => {

    try {
       await axios.delete(`api/houses/${_id}`)
       dispatch({ 
        type:DELETE_HOUSE, 
        payload:_id 
      })
    } catch(error) {
      dispatch({ type:HOUSE_ERROR })
    }
    
  }

  // update house
  const updateHouse = async (house) => {
    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    }

    try {
      const res = await axios.put(`api/houses/${house._id}`, house, config)
      dispatch({
        type:UPDATE_HOUSE, 
        payload:res.data
      })
    } catch(error) {
      dispatch({ type:HOUSE_ERROR })
    }
    
  }


  // set current
  const setCurrent = (house) => {
    dispatch({ type:SET_CURRENT, payload:house })
  }

  // set current
  const clearCurrent = () => {
    dispatch({ type:CLEAR_CURRENT })
  }


  


  // filter house
  const filterHouses = (text) => {
    dispatch({type:FILTER_HOUSES, payload:text})
  }

  // clear filter
  const clearFilter = ()=>{
    dispatch({ type:CLEAR_FILTER })
  }


  return (
    <HouseContext.Provider value={{
       Houses: state.Houses,
       current: state.current,
       filtered: state.filtered,
       getHouses,
       addHouse,
       clearHouses,
       deleteHouse,
       setCurrent,
       clearCurrent,
       updateHouse,
       filterHouses,
       clearFilter
      }}>
      {props.children}
    </HouseContext.Provider>
  )
}

export default Housestate;