import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {store,persistor} from './redux/store';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';

import useToken from "./App/useToken";


// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    
      <Router>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
        <Navbar/>
        
      <Switch>
        <Route exact path="/" > <Home/></Route>
        <Route path="/login" component={ Login }></Route>
        <Route path="/register" component={Registration}></Route>
        <Route path="/addproduct" component={AddProduct}></Route>
      </Switch>
      </PersistGate>
      </Provider>
      </Router>
    
  );
}

export default App