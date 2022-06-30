import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import About from './components/About';
import EditProduct from './components/EditProduct';
import ProductDetails from './components/ProductDetails';
import Chart from './components/Chart';
import DeleteProduct from './components/DeleteProduct';






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
        {(!token) ? <Redirect to="/login"  /> : <AddProduct/>}
        </Route>
        <Route path="/delete" component={DeleteProduct} />
        <Route path="/about"><About/></Route>
        <Route path="/edit/:id" >
        {(!token) ? <Redirect to="/login"  /> : <EditProduct/>}
        </Route>
        <Route path='/productdetails/:id' component={ProductDetails} />
        <Route path='/chart' component={Chart} />
      </Switch>
      </Router>
    
  );
}

export default App