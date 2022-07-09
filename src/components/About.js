import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/4481534/pexels-photo-4481534.jpeg?auto=compress&cs=tinysrgb&w=800")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const Wrapper = styled.div`
  width: 40%;
  grid-column: 2/3;
  grid-row:2/4;
  padding:20px;
  background-color: white;
  opacity: 0.8;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
const About = () => {
  return (
    <Container>
      <Wrapper>
        <Title>ABOUT IMS</Title>
        <p>IMS is a one-stop solution of all your inventory management
          needs. You can manage your inventory with ease with Add, Edit and Delete options.
          It also has an extra level of security so that non-authorized members cannot tamper 
          your inventory data.
        </p>
      </Wrapper>
    </Container>
  )
}

export default About