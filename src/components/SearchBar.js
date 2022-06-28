import React,{useState} from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import {Search} from '@mui/icons-material';



const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display; flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border:none;
    ${mobile({ width: "50px" })}
`;


const SearchBar = () => {
  
  return (
    <div>
        <SearchContainer>
          <Input placeholder='Search'/>
          <Search style={{color:"gray",fontSize:16}} />
        </SearchContainer>
    </div>
  )
}

export default SearchBar