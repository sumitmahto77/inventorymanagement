import React,{Suspense} from 'react';
import Footer from './Footer';
import MenuItems from './MenuItems';

const Products = React.lazy(() => import ('./Products'));

const Home = () => {
  
  return (
    <div>
      <MenuItems/>
      <Suspense fallback={<div>Loading...</div>}>
        <Products/>
      </Suspense>
      <Footer/>       
    </div>
  );
}

export default Home