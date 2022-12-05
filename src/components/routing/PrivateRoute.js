import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/realtorAuth/authContext";
import Spinner from "../layouts/Spinner";

const PrivateRoute = () => {
  const authState = useContext(AuthContext);
  const { isRealtorAuthenticated, realtorLoading } = authState;
  if (realtorLoading) return <Spinner />;
  return isRealtorAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/realtorlogin"} />
  );
};

export default PrivateRoute;
