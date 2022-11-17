import React, { useReducer, useEffect } from 'react';
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'

import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REALTOR_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
  
} from '../types';

const AuthState = (props) => {
    const initialState = {
      realtor: null,
      realtorToken: localStorage.getItem('realtortoken'),
      isRealtorAuthenticated: null,
      isUserAuthenticated: null,
      realtorLoading: true,
      error: null
    };
  
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    
    // Register realtor
    const realtorRegister = async (formData, images) => {
      formData.realtorImage = images

      const config = {
        headers: {
          "Content-Type": 'application/json'
        }
      }
      try {
        const res = await axios.post ('api/realtors', formData, config)
        dispatch ({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
      } catch(err) {
        dispatch ({
          type: REGISTER_FAIL,
          payload: err.response.data
        })
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

      } catch(err) {
        dispatch ({
          type: LOGIN_FAIL,
          payload: err.response.data.msg
        })
        console.log('error ', err.response)
      }
    }


    // login realtor
    const realtorLogin = async (formData) => {
      const config = {
        headers: {
          "Content-Type": 'application/json'
        }
      }

      try {
        const res = await axios.post ('api/authRealtor', formData, config)
        
        dispatch ({
          type: LOGIN_SUCCESS,
          payload: res.data
        })

        loadRealtor();
      } catch(err) {

        dispatch ({
          type: LOGIN_FAIL,
          payload: err.response.data.msg
        })

        console.log('error ', err.response)
      }
    }

    // logout 
    const logout = () => dispatch({ type: LOGOUT })
    

    // load realtor
    const loadRealtor = async () => {
      if(localStorage.realtortoken) {
        setAuthToken(localStorage.realtortoken, 'realtortoken')
      }
      const res = await axios.get('api/authRealtor')
      
      try {
        dispatch ({
          type: REALTOR_LOADED,
          payload: res.data
        })
      } catch(error) {
        dispatch ({
          type: AUTH_ERROR
        })
      }
    }
   
    // clear error
   
    // set token on initial app loading
    // setAuthToken(state.realtorToken, 'realtortoken');
   

    // load realtor on first run or refresh
    if (state.realtorLoading) {
      loadRealtor();
    }

    // 'watch' state.token and set headers and local storage on any change
    useEffect(() => {
      setAuthToken(state.realtorToken, 'realtortoken');
    }, [state.realtorToken]);
   

    // AuthState Provider Component
    return (
      <AuthContext.Provider value={{
        realtor: state.realtor,
        error: state.error,
        isRealtorAuthenticated: state.isRealtorAuthenticated,
        realtorRegister,
        realtorLogin,
        logout,
        loadRealtor,
        removeImage,
      }}>

        {props.children}
      </AuthContext.Provider>
    )
}
export default AuthState;