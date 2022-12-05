import React, { useReducer, useEffect, useContext } from "react";
import axios from "axios";
import RealtorContext from "./realtorContext";
import AuthContext from "../realtorAuth/authContext";
import realtorReducer from "./realtorReducer";

import {
  GET_REALTORS,
  GET_REALTOR,
  ADD_REALTOR,
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  UPDATE_FAVOURITE,
  DELETE_REALTOR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_REALTOR,
  FILTER_REALTORS,
  CLEAR_REALTORS,
  CLEAR_FILTER,
  REALTOR_ERROR,
} from "../Types";

const RealtorState = (props) => {
  const initialState = {
    realtors: null,
    realtor: null,
    current: null,
    filtered: null,
    favourites: [],
  };

  const [state, dispatch] = useReducer(realtorReducer, initialState);

  const authContext = useContext(AuthContext);
  const authenticatedRealtor = authContext.realtor;

  // Get realtors
  const getRealtors = async () => {
    try {
      const res = await axios.get("/api/realtors");
      dispatch({
        type: GET_REALTORS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REALTOR_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Get realtor
  const getRealtor = async (_id) => {
    try {
      const res = await axios.get(`api/realtors/${_id}`);
      dispatch({
        type: GET_REALTOR,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: REALTOR_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // add realtors
  const addRealtor = async (house, images) => {
    house.houseImages = images;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/realtors", house, config);

      dispatch({ type: ADD_REALTOR, payload: res.data });
    } catch (error) {
      dispatch({ type: REALTOR_ERROR });
    }
  };

  const removeImage = async (public_id) => {
    const id_obj = {
      public_id: public_id,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(`api/realtors/image`, id_obj, config);
      console.log(res);
    } catch (error) {
      dispatch({ type: REALTOR_ERROR });
    }
  };

  // clear realtors
  const clearRealtors = () => {
    dispatch({ type: CLEAR_REALTORS });
  };

  // Delete realtor
  const deleteRealtor = async (_id) => {
    try {
      await axios.delete(`api/realtors/${_id}`);
      dispatch({
        type: DELETE_REALTOR,
        payload: _id,
      });
    } catch (error) {
      dispatch({ type: REALTOR_ERROR });
    }
  };

  // update realtor
  const updateRealtor = async (realtor) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `api/realtors/${realtor._id}`,
        realtor,
        config
      );
      dispatch({
        type: UPDATE_REALTOR,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: REALTOR_ERROR });
    }
  };

  // add To favourite
  const addToFavourite = async (realtor, house) => {
    console.log(realtor._id);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/realtors/favourite/${realtor._id}`,
        JSON.stringify(house),
        config
      );
      dispatch({
        type: UPDATE_FAVOURITE,
        payload: house,
      });
    } catch (error) {
      dispatch({ type: REALTOR_ERROR });
    }
  };

  // remove from Favourite
  const removeFavourite = async (realtorId, houseId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/realtors/removefavourite/${realtorId}`,
        config
      );
      dispatch({
        type: DELETE_FAVOURITE,
        payload: houseId,
      });
    } catch (error) {
      dispatch({ type: REALTOR_ERROR });
    }
  };

  // load realtor favourite on first run or refresh
  useEffect(() => {
    if (authenticatedRealtor && authenticatedRealtor.favourites) {
      dispatch({
        type: ADD_FAVOURITE,
        payload: authenticatedRealtor.favourites,
      });
    }
  }, [authenticatedRealtor]);

  // set current
  const setCurrent = (house) => {
    dispatch({ type: SET_CURRENT, payload: house });
  };

  // set current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // filter house
  const filterRealtors = (text) => {
    dispatch({ type: FILTER_REALTORS, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <RealtorContext.Provider
      value={{
        realtors: state.realtors,
        realtor: state.realtor,
        favourites: state.favourites,
        current: state.current,
        filtered: state.filtered,
        getRealtors,
        getRealtor,
        addRealtor,
        addToFavourite,
        removeFavourite,
        clearRealtors,
        deleteRealtor,
        removeImage,
        setCurrent,
        clearCurrent,
        updateRealtor,
        filterRealtors,
        clearFilter,
      }}
    >
      {props.children}
    </RealtorContext.Provider>
  );
};

export default RealtorState;
