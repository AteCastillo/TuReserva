import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
//import {Logout} from './Logout';
import logo from './logo3.png';
//import './Navbar.css';
import icon from './Main/user.png'
import './logo.css';
import "./Main/Main.css"
import { MDBIcon } from "mdbreact";


export const Navbar = (props) => (
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
     
      {props.islogged ? (
        <div>
        <img src={icon} className="icon-user"/>
        <p className="icon-msg">Welcome</p>
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
  
);