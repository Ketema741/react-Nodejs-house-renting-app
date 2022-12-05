import "./css/Navbar.css";
import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import RealtorLogin from "./components/realtorAuth/Login";
import RealtorRegister from "./components/realtorAuth/Register";
import RealtorHomes from "./components/realtorHouse/RealtorHomes";
import HomeDetail from "./components/houses/HomeDetail";
import Realtors from "./components/realtors/Realtors";
import PrivateRoute from "./components/routing/PrivateRoute";
import Profile from "./components/profile/UserProfile";
import Favourite from "./components/favourite/Favourite";

import RealtorAuthState from "./context/realtorAuth/AuthState";
import AlertState from "./context/alert/AlertState";
import HouseState from "./context/house/HouseState";
import RealtorState from "./context/realtor/RealtorState";

function App() {
  return (
    <RealtorAuthState>
      <AlertState>
        <HouseState>
          <RealtorState>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="realtorlogin" element={<RealtorLogin />} />
                <Route path="realtorregister" element={<RealtorRegister />} />
                <Route path="/edit-profile" element={<Profile />} />
                <Route path="/favourites" element={<Favourite />} />
                <Route element={<PrivateRoute />}>
                  <Route element={<RealtorHomes />} path="realtordashboard" />
                </Route>
                <Route path="house/:houseId" element={<HomeDetail />} />
                <Route path="realtors" element={<Realtors />} />
              </Routes>
            </Router>
          </RealtorState>
        </HouseState>
      </AlertState>
    </RealtorAuthState>
  );
}

export default App;
