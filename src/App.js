import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    
      <Router>
        <Navbar/>
        <div>

          <div>
            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          </nav>

          </div>
        
      <Switch>
        <Route exact path="/" > <Home/></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/register" component={Registration}></Route>
      </Switch>

      </div>
      </Router>
    
  );
}

export default App