import React from 'react'
import Products from './Products';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import MenuItems from './MenuItems';

const Home = () => {
  
  return (
    <div>
      <MenuItems/>
      <Products/>
      <Footer/>       
    </div>
  );
}

export default Home