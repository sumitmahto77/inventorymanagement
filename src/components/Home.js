import React from 'react'
import Products from './Products';
import Footer from './Footer';
import {Link} from 'react-router-dom';

const Home = () => {
  
  return (
    <div>
      <Link to="/addproduct">Add Product</Link>
      <Products/>
      <Footer/>
       
    </div>
  );
}

export default Home