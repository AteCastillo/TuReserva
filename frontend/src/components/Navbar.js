import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
//import {Logout} from './Logout';
import logo from './logo2.png';
//import './Navbar.css';
import './logo.css';
import "./Main/Main.css"



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
        <p>Logged</p>
      ) : (
        <div className="login-navbar">
        <Link className="form-login" aria-current="page" to="/login">Log in</Link>
        <Link className="form-signupuser" aria-current="page" to="/signupuser">Sing up</Link>
        </div>
      )}
      
    </div>
  
);