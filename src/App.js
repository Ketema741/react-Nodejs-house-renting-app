import './css/Navbar.css';
import './css/App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RealtorHomes from './components/realtorHouse/RealtorHomes';
import HomeDetail from './components/detail/HomeDetail';
import RealtorDetail from './components/detail/RealtorDetail';
import PrivateRoute from './components/routing/PrivateRoute'

import AuthState from './context/auth/AuthState'; 
import AlertState from './context/alert/AlertState';
import HouseState from './context/house/HouseState';


function App() { 
  return (
    <AuthState>
    <AlertState>
    <HouseState>
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route element={<RealtorHomes />} path='realtordashbord' />
            </Route>
            <Route path='house/:houseId' element={<HomeDetail />} />
            <Route path='realtordetail' element={<RealtorDetail />} />
        </Routes>
      </Router>
    </HouseState>
    </AlertState>
    </AuthState>

  );
}

export default App;
