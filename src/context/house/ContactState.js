import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';



const ContactState = (props) => {
  const initialState = {
    favourites:null,
    message:null,
    controler:false,
  }; 

  const [state, dispatch] = useReducer(contactReducer, initialState);
  
  
  // Get Contacts
 const getContacts = async () => {
  try {
    const res = await axios.get('api/contacts');

    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    });
    } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
    }
  };

  // add contact
  const addContact = async(contact)=>{
    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    }

    try {
      const res = await axios.post('api/contacts', contact, config)
      dispatch({ type:ADD_CONTACT, payload:res.data })
    } catch(error) {
      dispatch({ type:CONTACT_ERROR })
    }
  
  }


  // clear contacts
  const clearContacts = () => {
    dispatch({ type:CLEAR_CONTACTS })
  }

    
  // Delete Contact
  const deleteContact = async (_id) => {

    try {
       await axios.delete(`api/contacts/${_id}`)
       dispatch({ 
        type:DELETE_CONTACT, 
        payload:_id 
      })
    } catch(error) {
      dispatch({ type:CONTACT_ERROR })
    }
    
  }

  // update contact
  const updateContact = async (contact) => {
    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    }

    try {
      const res = await axios.put(`api/contacts/${contact._id}`, contact, config)
      dispatch({
        type:UPDATE_CONTACT, 
        payload:res.data
      })
    } catch(error) {
      dispatch({ type:CONTACT_ERROR })
    }
    
  }


  // set current
  const setCurrent = (contact) => {
    dispatch({ type:SET_CURRENT, payload:contact })
  }

  // set current
  const clearCurrent = () => {
    dispatch({ type:CLEAR_CURRENT })
  }


  


  // filter contact
  const filterContacts = (text) => {
    dispatch({type:FILTER_CONTACTS, payload:text})
  }

  // clear filter
  const clearFilter = ()=>{
    dispatch({ type:CLEAR_FILTER })
  }


  return (
    <ContactContext.Provider value={{
       contacts: state.contacts,
       current: state.current,
       filtered: state.filtered,
       getContacts,
       addContact,
       clearContacts,
       deleteContact,
       setCurrent,
       clearCurrent,
       updateContact,
       filterContacts,
       clearFilter
      }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState;