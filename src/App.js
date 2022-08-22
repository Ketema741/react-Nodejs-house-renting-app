import './css/Navbar.css';
import './css/App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <AuthState>
    <AlertState>
      <Router>
        <div>
          <Switch >
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </div>
      </Router>
    </AlertState>
    </AuthState>

  );
}

export default App;
