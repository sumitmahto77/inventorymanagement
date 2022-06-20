import React,{useState} from "react";
import styled from "styled-components";
import {mobile} from '../responsive';
import {useDispatch} from 'react-redux';
// import { addUser } from "../redux/actions";
import { useHistory} from 'react-router-dom';
import { registerInitiate } from "../redux/actions";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Registration = () => {
  // const [state,setState] =useState({
  //   firstName: "",
  //   lastName: "",
  //   location: "",
  //   email: "",
  //   phone: "",
  //   password: ""
  // });
  // const [error, setError] = useState("");
  // let dispatch = useDispatch();
  // let history = useHistory();
  // const {firstName,lastName,location,email,phone,password} = state;

  // const handleInputChange =(e) => {
  //   let {name, value} = e.target;
  //   setState({...state, [name]:value});
  // };

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   if (!firstName || !lastName || !location || !email || !phone || !password) {
  //     setError("Please input all fields");
  //   }else{
  //     // dispatch(addUser(state));
  //     history.push("/");
  //     setError("");
  //   }
  // };

  // const register =  (e) => {
  //   e.preventDefault();
  //   dispatch(registerInitiate(state));
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    phone: "",
    password: ""
  })

  const {firstName,lastName,location,email,phone,password} = formData;

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

function handleChange(e) {
    setFormData({...formData, [e.target.name] : e.target.value})
}

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {/* {error && <h3>{error}</h3>} */}
        <Form onSubmit={e=>handleSubmit(e)}>
          <Input placeholder="first name" name="firstName" label="First Name" value={firstName} type="text" onChange={e=>handleChange(e)}/>
          <Input placeholder="last name" name="lastName" label="Last Name" value={lastName} type="text" onChange={e=>handleChange(e)}/>
          <Input placeholder="location" name="location" label="Location" value={location} type="text" onChange={e=>handleChange(e)}/>
          <Input placeholder="email" name="email" label="Email" value={email} type="email" onChange={e=>handleChange(e)}/>
          <Input placeholder="phone number" name="phone" label="Phone" value={phone} type="text" onChange={e=>handleChange(e)}/>
          <Input placeholder="password" name="password" label="Password" value={password} type="password" onChange={e=>handleChange(e)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Registration;
