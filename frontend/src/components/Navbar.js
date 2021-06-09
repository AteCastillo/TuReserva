import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './logo2.png';
import './logo.css';
import "./Main/Main.css"
import icon from './Main/user.png'



export const Navbar = (props) => (
    <div className="navbar-main cyan darken-3">
      <div className="container-navbar">
      <Link to="/"> <img src={logo} className="navbar-logo" alt="logo" /></Link>
      <label htmlFor="service"></label>
      <div className="search-navbar">
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
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
        <Link className="form-login" aria-current="page" to="/login">Log in</Link>
        <Link className="form-signupuser" aria-current="page" to="/signupuser">Sing up</Link>
        </div>
      )}
      
    </div>
  
);