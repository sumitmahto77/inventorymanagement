import React, {useEffect} from 'react'
import Products from './Products';
import Footer from './Footer';
import { useDispatch,useSelector} from 'react-redux';
// import { loadUsers } from '../redux/actions';

const Home = () => {
  
  return (
    <div>
      <Products/>
      <Footer/>
       
    </div>
  );
}

export default Home