import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    
      <Router>
        <Navbar/>
        
      <Switch>
        <Route exact path="/" > <Home/></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/register" component={Registration}></Route>
      </Switch>

    
      </Router>
    
  );
}

export default App