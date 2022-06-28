import React from 'react'
import styled from 'styled-components';
import {NavLink,useHistory} from 'react-router-dom';
import {mobile} from "../responsive";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions';

const Container = styled.div`
    height:60px;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}

    `;
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    `;
const Language = styled.span`
    font-size : 14px;  
    cursor: pointer; 
    ${mobile({ display: "none" })}    
`;



const Center = styled.div`
    flex:1;
    text-align:center;
    `;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}

`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

`;

const Navbar = () => {
    let dispatch = useDispatch();
    const history = useHistory();
    const token = sessionStorage.getItem('token');
       
  return (
    // <Container>
    //     <Wrapper>
    //         <Left>
    //             <Language>EN</Language>
                // <SearchContainer>
                //     <Input placeholder='Search'/>
                //     <Search style={{color:"gray",fontSize:16}} />

                // </SearchContainer>
    //         </Left>
    //         <Center><Logo><Link to="/">IMS</Link></Logo></Center>
    //         <Right>
    //         <MenuItem><Link to="/register">REGISTER</Link></MenuItem>
    //         <MenuItem><Link to="/login">SIGN IN</Link></MenuItem>
    //         </Right>
    //     </Wrapper>
    // </Container>

    
    <nav className="navbar navbar-expand-lg navbar-light bg-info" id="main">
        <div className="container-fluid mx-auto">
        <NavLink  className="navbar-brand" to="/" >IMS</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink  className="nav-link active" aria-current="page" to="/" >HOME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link " aria-current="page" to="/about" >ABOUT</NavLink>
                </li>
                {token ? 
                <>
                <li className="nav-item">
                    <NavLink  className="nav-link" aria-current="page" to="/" onClick={(e)=> {
                        sessionStorage.clear();
                        localStorage.clear();
                        dispatch(logoutUser());
                        history.push("/");
                    }} >LOGOUT</NavLink>
                </li>

                </> : 
                <>
                <li className="nav-item">
                    <NavLink  className="nav-link" aria-current="page" to="/login" >LOGIN</NavLink>
                </li>
                <li className="nav-item">
                <NavLink  className="nav-link" aria-current="page" to="/register" >REGISTER</NavLink>
                </li>
                </>
                }
                                   
            </ul>
        </div>
        </div>
    </nav>

  )
}

export default Navbar