import React,{useState} from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const AddProduct = () => {
  const [name, setName] = useState('');
  const [imgLink, setImgLink] = useState('');
  const [description, setDescription] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const dispatch = useDispatch();

  
  const handleSubmit = e =>{
    e.preventDefault();
    dispatch(addProduct({
      "name":name,
      "img":imgLink,
      "description" : description,
      "manufacturer" : manufacturer,
      "price" : price,
      "quantity" : quantity,
      "count" : 0
    }))
  };


  return (
    <div>
        <Container>
          <Wrapper>
            <Title>Enter product details</Title>
            <Form onSubmit={e=>handleSubmit(e)}>
              <Input type="text"  placeholder='name'  onChange={e=>setName(e.target.value)}/>
              <Input type="text" placeholder='Image Link' onChange={e=>setImgLink(e.target.value)} />
              <Input type="text" placeholder='Description' onChange={e=>setDescription(e.target.value)} />
              <Input type="text" placeholder='Manufacturer' onChange={e=>setManufacturer(e.target.value)} />
              <Input type="text" placeholder='Price' onChange={e=>setPrice(e.target.value)} />
              <Input type="text" placeholder='Quantity' onChange={e=>setQuantity(e.target.value)} />
              <Button type="submit">SUBMIT</Button>
            </Form>
          </Wrapper>
        </Container>

    </div>
  )
}

export default AddProduct