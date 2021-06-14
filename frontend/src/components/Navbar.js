import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './logo3.png';
import icon from './Main/user.png'
import './logo.css';
import "./Main/Main.css"
import { MDBIcon } from "mdbreact";




export const Navbar = ({isLogged, logout}) => {
  return (
    <div className="navbar-main cyan">
      <div className="container-navbar">
      <Link to="/"> <img src={logo} className="navbar-logo" alt="logo" /></Link>
      <label htmlFor="service"></label>
      <div className="search-navbar">
      <form class="form-inline">
        <input class="form-control search-navbar mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
     </form>
      </div>  
      </div>
     
      {isLogged ? (
        <div>
        <img src={icon} className="icon-user" onClick={logout}/>
        <p className="icon-msg">Logout</p>
        </div>
      ) : (
        <div className="login-navbar">
        <MDBIcon icon="sign-in-alt"/>
        <Link className="form-login" aria-current="page" to="/login">Login</Link>
        <MDBIcon icon="user-plus" />
        <Link className="form-signupuser" aria-current="page" to="/signupuser">Sign up</Link>
        </div>
      )}
    </div>
  )
};