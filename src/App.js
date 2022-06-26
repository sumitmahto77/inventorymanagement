import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {store,persistor} from './redux/store';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import About from './components/About';
import EditProduct from './components/EditProduct';
import useToken from './App/useToken';





const App = () => {
  // const { token, setToken } = useToken();
  // const token = sessionStorage.getItem('token');
  const token = useSelector((state)=>state.auth.token);
  
  return (
    
      <Router>
        
        <Navbar token={token}/>
      <Switch>
        <Route exact path="/" > <Home/></Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register" component={Registration}></Route>
        <Route path="/addproduct">
        {
        (!token) ? <Redirect to="/login"  /> : <AddProduct/>}

        </Route>
        <Route path="/about"><About/></Route>
        <Route path="/edit/:id" component={EditProduct}/>
      </Switch>
      </Router>
    
  );
}

export default App