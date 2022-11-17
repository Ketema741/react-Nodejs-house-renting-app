import React, { useReducer, useContext, useEffect } from 'react';
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
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = (props) => {
    const initialState = {
      user: null,
      userToken: localStorage.getItem('usertoken'),
      isUserAuthenticated: null,
      userLoading: true,
      error: null
    };
  
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Register user
    const userRegister = async (formData) => {
    const config = {
      headers: {
        "Content-Type": 'application/json'
      }
    }
    try {
      const res = await axios.post('api/users', formData, config)
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


  // login user
  const userLogin = async (formData) => {
    const config = {
      headers: {
        "Content-Type": 'application/json'
      }
    }
    try {
      const res = await axios.post ('api/authUser', formData, config)
      dispatch ({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
      loadUser();
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

  // load user
  const loadUser = async () => {
    if(localStorage.usertoken) {
      setAuthToken(localStorage.usertoken, 'usertoken')
    }
    const res = await axios.get('api/authUser')
    
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
  setAuthToken(state.userToken,'usertoken');
  

  // load realtor on first run or refresh
  if (state.userLoading) {
    loadUser();
  }

  // 'watch' state.token and set headers and local storage on any change
  useEffect(() => {
    setAuthToken(state.userToken, 'usertoken');
  }, [state.userToken]);
  

    // AuthState Provider Component
    return (
      <AuthContext.Provider value = {{
        user: state.user,
        error: state.error,
        isUserAuthenticated: state.isUserAuthenticated,
        userRegister,
        userLogin,
        logout,
        loadUser,
      }}>

        {props.children}
      </AuthContext.Provider>
    )
}
export default AuthState;