import styled from "styled-components";
import {mobile} from "../responsive";

import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import { loginInitiate } from "../redux/actions";

import PropTypes from 'prop-types';
import axios from "axios";



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

const Login = ({setToken}) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // let history = useHistory();
  // let dispatch = useDispatch();
  // const {user, error} = useSelector(state => state.auth);

  // useEffect(() =>{
  //   if(user){
  //     history.push("/");
  //   }

  // },[user]);

  // const login = (e) => {
  //   e.preventDefault();
  //   dispatch(loginInitiate(email,password));
  // }

  // const handleInputChange =(e) => {
  //   let {name, value} = e.target;
  //   if (name ==="email"){
  //     setEmail(value);
  //   }
  //   else{
  //     setPassword(value);
  //   }
  // };


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

function loginUser(credentials) {
    axios.post("http://localhost:4000/login", credentials)
    .then((response) => {
      console.log("response", response); 
      setToken(response.data.accessToken);   
  })
  .catch((error) => console.log(error));
    // fetch('http://localhost:4000/login', {
    //     method: 'POST',
    //     headers: {'Content-Type' : 'application/json'},
    //     body: JSON.stringify(credentials)
    // })
//     .then(res => res.json())
}

const handleSubmit =  e => {
  e.preventDefault();
  const token = loginUser({
      "email": email,
      "password": password,
  });  
}

// function handleChange(e) {
//     setFormData({...formData, [e.target.name] : e.target.value})
// }


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={e => handleSubmit(e)}>
          <Input type="text"  placeholder="username" onChange={e => setEmail(e.target.value)}/>
          <Input  type="text" placeholder="password" onChange={e => setPassword(e.target.value)}/>
          <Button type="submit">LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};



Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;