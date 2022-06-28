import React from 'react'
import Products from './Products';
import Footer from './Footer';
import {Link} from 'react-router-dom';

const Home = () => {
  
  return (
    <div>
      <Link to="/addproduct" style={{padding:'5px'}}>Add Product</Link>
      <Link to="/chart" style={{padding:'5px'}}> Most Viewed Products</Link>
      <Products/>
      <Footer/>
       
    </div>
  );
}

export default Home