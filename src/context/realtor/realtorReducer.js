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
  } from '../types';
  
  const realtorReducer = (state, action) => {
    switch (action.type) {
      case GET_REALTORS:
        return {
          ...state,
          realtors: action.payload
        };
       
        case GET_REALTOR:
          return {
            ...state,
            realtor: action.payload
          };
      case ADD_REALTOR:
        return {
          ...state,
          realtors: [action.payload, ...state.realtors]
        };
      case UPDATE_REALTOR:
        return {
          ...state,
          realtors: state.realtors.map((realtor) =>
            realtor._id === action.payload._id ? action.payload : realtor
          )
        };
      case DELETE_REALTOR:
        return {
          ...state,
          realtors: state.realtors.filter(
            (realtor) => realtor._id !== action.payload
          )
        };
      case CLEAR_REALTORS:
        return {
          ...state,
          realtors: null,
          filtered: null,
          error: null,
          current: null
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case FILTER_REALTORS:
        return {
          ...state,
          filtered: state.realtors.filter(({ name, location }) => {
            const testString = `${name}${location}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          })
        };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null
        };
      case REALTOR_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        throw new Error(`Unsupported type of: ${action.type}`);
    }
  };
  
  export default realtorReducer;