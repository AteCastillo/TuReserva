import React from 'react';
import {Link} from 'react-router-dom';
import "./Main/Main.css"

export const Footer = () => (
    <footer class="page-footer  font-small cyan fix">
      <div class="container absolute">
        <div class="row">
    
          <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">
    
              <a class="fb-ic" href="www.facebook.com">
                <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="tw-ic" href="www.twitter.com">
                <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="gplus-ic" href="www.google.com">
                <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="li-ic" href="www.linkedin.com">
                <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="ins-ic" href="www.instagram.com">
                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="pin-ic" href="www.printerest.com">
                <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              <a href="privacy">Privacy</a>
              <Link className="p-3 partner-link" to="/signuppartner">Become our partner</Link>
              </div>
          </div>
        </div>
      </div>
      

    
    </footer>
);