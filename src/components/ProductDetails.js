import axios from 'axios';
import React from 'react';
import { useParams,useHistory } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components';
import {mobile} from '../responsive';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex : 1;
  font-size: 30px;
  align-items: center;
  background-color: #f5fbfd;
  
`;
const Wrapper = styled.div`
  padding : 10px;
  flex : 50%;
  border-color : 5px solid black;
  text-align: center;
  ${mobile({flex : "100%"})}
`;

const Image = styled.img`
  width : 50%;
`;

const Title = styled.h1`
    font-size: 30px;
    text-align: left;
    padding: 5vw 5vw 0vw 5vw;
`;
const Ruler = styled.hr`
  width: 75%;
  margin-left: 5vw;
  padding: 0.5vw;
  
`;
const List = styled.ul`
  font-size: 2vw;
  font-weight: 300;
  align-items: flex-start;
  text-align: left;
  padding: 0vw 5vw 5vw 5vw;
  list-style: none;
`;
const ListItem = styled.li`
  padding: 1vw;
`;

const Button = styled.button`
  background-color: teal;
  border-radius: 1vw;
  border: none;
  color: white;
  padding: 1vw;
  font-size: 1vw;
  ${mobile({"font-size":"2vw"})}
`;


const ProductDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector(state => state.prod.products);
  const myProduct = products.filter(function (el){
    return el.id == id;
  });
  const product = myProduct[0];
  const updateProduct=() =>{
    axios.patch(`http://localhost:4000/products/${id}`,{"count":product.count+1});
  }
  updateProduct();

  return (
    <div>
      <Container>
        <Wrapper>
          <Image src={product.img}/>
        </Wrapper>
        <Wrapper>
          <Title>{product.name}</Title>
          <Ruler/>
          <List>
            <ListItem>Description : {product.description}</ListItem>
            <ListItem>Manufacturer : {product.manufacturer}</ListItem>
            <ListItem>Price : Rs. {product.price}</ListItem>
            <ListItem>Quantity : {product.quantity} items</ListItem>
            <ListItem><Button onClick={()=>history.push("/")}>Go Back</Button></ListItem>
            
            
          </List>

         
        </Wrapper>
        

      </Container>
      
     
    </div>
  )
}

export default ProductDetails;