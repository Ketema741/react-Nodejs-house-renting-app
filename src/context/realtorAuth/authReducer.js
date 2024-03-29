import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REALTOR_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SET_CURRENT,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../Types";

const authReducer = (state, action) => {
  switch (action.type) {
    case REALTOR_LOADED:
      return {
        ...state,
        isRealtorAuthenticated: true,
        realtorLoading: false,
        realtor: action.payload,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isRealtorAuthenticated: true,
        realtorLoading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isRealtorAuthenticated: true,
        realtorLoading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isRealtorAuthenticated: false,
        realtorLoading: false,
        realtor: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        currentRealtor: action.payload,
      };
    default:
      throw new Error(`Unsupported type of: ${action.type}`);
  }
};

export default authReducer;
