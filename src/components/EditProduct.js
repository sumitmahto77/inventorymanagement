import React,{useState} from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { mobile } from '../responsive';
import axios from 'axios';

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
  width: 25%;
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

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const EditProduct = () => {
    const {id} = useParams();
    const [name,setName] = useState('');
    const [imgLink, setImgLink] = useState('');
    console.log(id);


    const handleSubmit = e =>{
        e.preventDefault();
        axios.put(`http://localhost:4000/products/${id}`,{
          "name":name,
          "img":imgLink,
        })
        .then(response=>{
          console.log(response);    
        }).catch(error=>console.log(error));
      };
    
    
  return (
    <div>
        <Container>
          <Wrapper>
            <Title>Enter product details</Title>
            <Form onSubmit={e=>handleSubmit(e)}>
              <Input type="text"  placeholder='name'  onChange={e=>setName(e.target.value)}/>
              <Input type="text" placeholder='Image Link' onChange={e=>setImgLink(e.target.value)} />
              <Button type="submit">SUBMIT</Button>
            </Form>
          </Wrapper>
        </Container>
    </div>
  )
}

export default EditProduct