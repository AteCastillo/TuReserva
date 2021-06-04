import React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => (
    <footer class="page-footer font-small cyan darken-3 fix">
      <div class="container absolute">
        <div class="row">
    
          <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">
    
              <a class="fb-ic">
                <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="tw-ic">
                <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="gplus-ic">
                <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="li-ic">
                <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="ins-ic">
                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
              </a>
              <a class="pin-ic">
                <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
              <a className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </a>
              <a>Privacy</a>
              <a>FAQ & Terms of Use</a>
              <a>Contact Us</a>
              <a>Become our partner</a>
              </div>
          </div>
        </div>
      </div>
      

    
    </footer>
);