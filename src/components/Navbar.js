import React from 'react'
import {NavLink,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions';


const Navbar = () => {
    let dispatch = useDispatch();
    const history = useHistory();
    const token = useSelector(state => state.auth.token)
       
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info" id="main">
        <div className="container-fluid mx-auto">
        <NavLink  className="navbar-brand" to="/" >IMS</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link"  to="/" >HOME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link "  to="/about" >ABOUT</NavLink>
                </li>
                {token ? 
                <>
                <li className="nav-item">
                <NavLink  className="nav-link"  to="/profile" >PROFILE</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link"  to="/" onClick={(e)=> {
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