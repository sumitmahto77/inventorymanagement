import React, {useEffect} from 'react'
import Products from './Products';
import Footer from './Footer';
import { useDispatch,useSelector} from 'react-redux';
// import { loadUsers } from '../redux/actions';

const Home = () => {
  // let dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(loadUsers());
  // },[]);
  const {user, error} = useSelector(state => state.auth);

  
  return (
    <div>
      <Products/>
      <Footer/>
       
    </div>
  );
}

export default Home