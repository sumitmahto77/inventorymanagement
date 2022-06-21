import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data/data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

  // useEffect(()=>{
  //   axios.get("http://localhost:4000/products")
  //   .then(response=>{
  //     const popularProducts = {
  //       id: response.data[0].id,
  //       item: response.data[0]
  //     };
  //     theArray.push(popularProducts);
  //   })
  // },[]);
  // console.log(theArray);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
