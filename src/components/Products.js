import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  let [productList, setProductList] = useState([]);
  useEffect(()=>{
    axios
      .get("http://localhost:4000/products")
      .then(response =>{
        setProductList(response.data);
      })
      .catch((error)=>console.log(error))

  },[]);

  return (
    <Container>
      {productList.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
