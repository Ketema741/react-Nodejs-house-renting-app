import {
  GET_HOUSES,
  GET_PUBLICHOUSES,
  GET_HOUSE,
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
  
  const houseReducer = (state, action) => {
    switch (action.type) {
      case GET_HOUSES:
        return {
          ...state,
          houses: action.payload
        };
        case GET_PUBLICHOUSES:
          return {
            ...state,
            publichouses: action.payload
          };
        case GET_HOUSE:
          return {
            ...state,
            house: action.payload
          };
      case ADD_HOUSE:
        return {
          ...state,
          houses: [action.payload, ...state.houses]
        };
      case UPDATE_HOUSE:
        return {
          ...state,
          houses: state.houses.map((house) =>
            house._id === action.payload._id ? action.payload : house
          )
        };
      case DELETE_HOUSE:
        return {
          ...state,
          houses: state.houses.filter(
            (house) => house._id !== action.payload
          )
        };
      case CLEAR_HOUSES:
        return {
          ...state,
          houses: null,
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
      case FILTER_HOUSES:
        return {
          ...state,
          filtered: state.publichouses.filter(({ title, location }) => {
            const testString = `${title}${location}`.toLowerCase();
            return testString.includes(action.payload.toLowerCase());
          })
        };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null
        };
      case HOUSE_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        throw new Error(`Unsupported type of: ${action.type}`);
    }
  };
  
  export default houseReducer;