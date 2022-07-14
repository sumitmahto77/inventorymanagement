import React from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import {mobile} from '../responsive';

const Container = styled.div`
    display : flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1vw;
    min-width: 280px;
`;
const Button = styled.button`
    background-color: teal;
    border-radius: 1vw;
    color: white;
    padding: 1vw;
    font-size: 15px;
    ${mobile({"font-size":"10px"})}
`;

const MenuItems = () => {
  return (
    <Container>
        <Link to="/addproduct"><Button>add Product</Button></Link>
        <Link to="/delete"><Button>delete product</Button></Link>
        <Link to="/chart"><Button>most viewed products</Button></Link>
    </Container>
  )
}

export default MenuItems