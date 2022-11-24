import React, { useReducer } from 'react';
import axios from 'axios';
import RealtorContext from './realtorContext';
import realtorReducer from './realtorReducer';

import {
  GET_REALTORS,
  GET_REALTOR,
  ADD_REALTOR,
  DELETE_REALTOR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_REALTOR,
  FILTER_REALTORS,
  CLEAR_REALTORS,
  CLEAR_FILTER,
  REALTOR_ERROR
} from '../Types';



const RealtorState = (props) => {
  const initialState = {
    realtors: null,
    realtor: null,
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(realtorReducer, initialState);
  
  // Get realtors
  const getRealtors = async () => {
    try {
      const res = await axios.get('api/realtors');
      dispatch({
        type: GET_REALTORS,
        payload: res.data
      });
      } catch (err) {
      dispatch({
        type: REALTOR_ERROR,
        payload: err.response.msg
      });
    }
  }
  
  
 // Get realtor
 const getRealtor = async (_id) => {
  try {
    const res = await axios.get(`api/realtors/${_id}`);
    dispatch({
      type: GET_REALTOR,
      payload: res.data
    });
    } catch (err) {
      dispatch({
        type: REALTOR_ERROR,
        payload: err.response.msg
      });
  } 
}

  // add realtors
  const addRealtor = async (house, images) => {
    house.houseImages = images
    const config = {
      headers: {
        "Content-Type" : "application/json"
      }
    }
    try {
      const res = await axios.post('api/realtors', house, config)
      
      dispatch({ type: ADD_REALTOR, payload: res.data })
    } catch(error) {
      dispatch({ type : REALTOR_ERROR })
    } 
  }

  const removeImage = async (public_id) => {
    const id_obj = {
      public_id : public_id
    }
     
    const config = {
      headers : { 
        "Content-Type": "application/json"
      }
    } 
    try { 
      const res = await axios.post(`api/realtors/image`, id_obj, config)
      console.log(res)
    } catch(error) {
      dispatch({ type: REALTOR_ERROR })
    }
  }


  // clear realtors
  const clearRealtors = () => {
    dispatch({ type: CLEAR_REALTORS })
  }

    
  // Delete realtor
  const deleteRealtor = async (_id) => {
    try {
       await axios.delete(`api/realtors/${_id}`)
       dispatch({ 
        type: DELETE_REALTOR, 
        payload: _id 
      })
    } catch(error) {
      dispatch({ type: REALTOR_ERROR })
    }
  }

  // update realtor
  const updateRealtor = async (realtor) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      const res = await axios.put(`api/houses/${realtor._id}`, realtor, config)
      dispatch({
        type: UPDATE_REALTOR, 
        payload: res.data
      })
    } catch(error) {
      dispatch({ type: REALTOR_ERROR })
    }
  }


  // set current
  const setCurrent = (house) => {
    dispatch({ type: SET_CURRENT, payload: house })
  }

  // set current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }


  // filter house
  const filterRealtors = (text) => {
    dispatch({type: FILTER_REALTORS, payload: text})
  }

  // clear filter
  const clearFilter = ()=>{
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <RealtorContext.Provider value = {{
       realtors: state.realtors,
       realtor: state.realtor,
       current: state.current,
       filtered: state.filtered,
       getRealtors,
       getRealtor,
       addRealtor,
       clearRealtors,
       deleteRealtor,
       removeImage,
       setCurrent,
       clearCurrent,
       updateRealtor,
       filterRealtors,
       clearFilter
      }}>
      {props.children}
    </RealtorContext.Provider>
  )
}

export default RealtorState;