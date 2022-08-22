import React, { useReducer, useContext, useEffect } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = (props) => {
    const initialState = {
      user:null,
      token:localStorage.getItem('token'),
      isAuthenticated: null,
      loading:true,
      error:null,
    };
  
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    
    // Register User
    const register = async (formData) => {
      try {
        dispatch ({
          type:REGISTER_SUCCESS,
          payload:state.user
        })
      } catch(err) {
        dispatch ({
          type:REGISTER_FAIL,
          payload:err.response.data.msg
        })
      }
    }

    // login user
    const login = async (formData) => {
      try {
        dispatch ({
          type:LOGIN_SUCCESS,
          payload:state.user
        })
      } catch(err) {
          dispatch ({
            type:LOGIN_FAIL,
            payload:err.response.data.msg
          })
        }
    }


    // logout 
    const logout = () => dispatch({ type: LOGOUT })

  

    // load user
   
    // clear error
   
    // set token on initial app loading

    // load user on first run or refresh
    

    // 'watch' state.token and set headers and local storage on any change
    
    

    // AuthState Provider Component
    return (
      <AuthContext.Provider value={{
        user: state.user,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        register,
        login,
        logout,
      }}>

        {props.children}
      </AuthContext.Provider>
    )
}
export default AuthState;