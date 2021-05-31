import React from 'react';
import {Link} from 'react-router-dom';
import {Login} from './Login';
import {Logout} from './Logout';


export const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">React and Flask</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" 
            aria-current="page" 
            to="/Register">
              
              {props.islogged ? "A":"B"}
              </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
);