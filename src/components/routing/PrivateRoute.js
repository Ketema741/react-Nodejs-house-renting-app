import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layouts/Spinner'

const PrivateRoute = () => {
  const authState = useContext(AuthContext);
  const { isAuthenticated, loading } = authState;
  if (loading) return <Spinner />;
  return isAuthenticated ? <Outlet /> : <Navigate to ={'/login'} />;
};

export default PrivateRoute;