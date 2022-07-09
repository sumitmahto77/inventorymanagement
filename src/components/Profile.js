import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions';

const Container = styled.div`
  width : 100vw;
  height : 100vh;
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
  width : 40%;
  padding: 20px;
  background-color: white;
  
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: rgb(150,50,50);
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 12px;
`;


const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.auth.user);
  console.log(data);
  return (
    <Container>
      
      <Wrapper>
      <Title>My Profile</Title>
        <List>
          <ListItem>{data.firstName + " " + data.lastName}</ListItem>
          <ListItem>{data.email}</ListItem>
          <ListItem>{data.location}</ListItem>
          <ListItem>{data.phone}</ListItem>
        </List>
        <Button onClick={()=>dispatch(logoutUser())}>LOGOUT</Button>
      </Wrapper> 
    </Container>

  );
}

export default Profile;