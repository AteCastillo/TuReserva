import React from 'react';
import {Link} from 'react-router-dom';
import {Login} from './Login';
//import {Logout} from './Logout';
import logo from './logo2.png';
//import './Navbar.css';
import './logo.css';

export const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <img src={logo} className="navbar-logo" alt="logo" />
      <label htmlFor="service"></label>
      <input style={{display: 'block', marginLeft: '50px'}} type="text" id="search" placeholder="Search"/>
      <Link className="navbar-brand" to="/">Y este react?</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <Link className="nav-link active" 
            aria-current="page" 
            to="/Register">
              
              {props.islogged ? "A":"B"}
              </Link>
          </li>
        </ul>
      </div>
      <Login/>
      <Link className="form-signupuser" aria-current="page" to="/signupuser">Sing up</Link>
      <Link className="form-signuppartner" aria-current="page" to="/signuppartner">Become our partner</Link>
    </div>
  </nav>
  
);