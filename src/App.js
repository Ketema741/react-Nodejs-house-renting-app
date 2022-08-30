import './css/Navbar.css';
import './css/App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import HomeForm from './components/houses/HomeForm';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import HouseState from './context/house/HouseState';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <AuthState>
    <AlertState>
    <HouseState>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/form' component={HomeForm} />
          </Switch>
        </div>
      </Router>
    </HouseState>
    </AlertState>
    </AuthState>

  );
}

export default App;
