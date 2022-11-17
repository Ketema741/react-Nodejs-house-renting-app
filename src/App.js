import './css/Navbar.css';
import './css/App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home';
import RealtorLogin from './components/realtorAuth/Login';
import RealtorRegister from './components/realtorAuth/Register';
import UserLogin from './components/userAuth/Login';
import UserRegister from './components/userAuth/Register';
import RealtorHomes from './components/realtorHouse/RealtorHomes';
import HomeDetail from './components/houses/HomeDetail';
import Realtors from './components/realtors/Realtors';
import PrivateRoute from './components/routing/PrivateRoute'

import RealtorAuthState from './context/realtorAuth/AuthState'; 
import UserAuthState from './context/userAuth/AuthState'; 
import AlertState from './context/alert/AlertState';
import HouseState from './context/house/HouseState';
import RealtorState from './context/realtor/RealtorState';


function App() { 
  return (
    <RealtorAuthState>
    <UserAuthState>
    <AlertState>
    <HouseState>
    <RealtorState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='realtorlogin' element={<RealtorLogin />} />
          <Route path='realtorregister' element={<RealtorRegister />} />
          <Route path='userlogin' element={<UserLogin />} />
          <Route path='userregister' element={<UserRegister />} />
          <Route element={<PrivateRoute />}>
            <Route element={<RealtorHomes />} path='realtordashboard' />
          </Route>
          <Route path='house/:houseId' element={<HomeDetail />} />
          <Route path='realtors' element={<Realtors />} />
        </Routes>
      </Router>
    </RealtorState>
    </HouseState>
    </AlertState>
    </UserAuthState>
    </RealtorAuthState>

  );
}

export default App;
