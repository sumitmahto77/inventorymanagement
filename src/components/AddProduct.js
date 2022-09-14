import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Prompt } from 'react-router';





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
  border-radius: 1vw;
`;

const validationSchema = Yup.object({
  name:Yup.string().required(<PriorityHighIcon/>),
  imgLink:Yup.string().required(<PriorityHighIcon/>),
  description:Yup.string().required(<PriorityHighIcon/>),
  manufacturer:Yup.string().required(<PriorityHighIcon/>),
  price:Yup.number().required(<PriorityHighIcon/>).integer().positive(),
  quantity:Yup.number().required(<PriorityHighIcon/>).integer().positive()
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const {handleSubmit, handleChange,handleReset, values, errors,touched} = useFormik({
    initialValues:{
      name:"",
      imgLink:"",
      description:"",
      manufacturer:"",
      price:"",
      quantity:""
    },
    validationSchema,
    onSubmit(values){
      dispatch(addProduct({
        "name":values.name,
        "img":values.imgLink,
        "description" : values.description,
        "manufacturer" : values.manufacturer,
        "price" : values.price,
        "quantity" : values.quantity,
        "count" : 0
      }));
      alert("Product Added Successfully!");
      handleReset();

    }
  });

  return (
    <div>
        <Container>
          <Prompt when={!values.name || !values.imgLink || !values.description || !values.manufacturer || !values.price || !values.quantity} 
          message={"Do you want to discard the changes?"} />
          <Wrapper>
            <Title>Enter product details</Title>
            <Form onSubmit={handleSubmit}>
              {touched.name && errors.name ? <div style={{color:"red",display:'inline'}}>{errors.name}</div> :<></>}
              <Input type="text"  name="name" placeholder='name'  onChange={handleChange} value={values.name}/>
              
              {touched.imgLink && errors.imgLink ? <div style={{color:"red",display:'inline'}}>{errors.imgLink}</div> :<></>}
              <Input type="text" name="imgLink" placeholder='Image Link' onChange={handleChange} value={values.imgLink}/>
              
              {touched.description && errors.description ? <div style={{color:"red",display:'inline'}}>{errors.description}</div> :<></>}
              <Input type="text" name="description" placeholder='Description' onChange={handleChange} value={values.description}/>
              
              {touched.manufacturer && errors.manufacturer ? <div style={{color:"red",display:'inline'}}>{errors.manufacturer}</div> :<></>}
              <Input type="text" name="manufacturer" placeholder='Manufacturer' onChange={handleChange} value={values.manufacturer}/>

              {touched.price && errors.price ? <div style={{color:"red",display:'inline'}}>{errors.price}</div> :<></>}
              <Input type="text" name="price" placeholder='Price' onChange={handleChange} value={values.price}/>

              {touched.quantity && errors.quantity ? <div style={{color:"red",display:'inline'}}>{errors.quantity}</div> :<></>}
              <Input type="text" name="quantity" placeholder='Quantity' onChange={handleChange} value={values.quantity}/>

              <Button type="submit">SUBMIT</Button>
              <Button onClick={handleReset} style={{backgroundColor:"rgb(125,30,30)"}}>Reset</Button>
            </Form>
          </Wrapper>
        </Container>

    </div>
  )
}

export default AddProduct