import React, { Component } from "react";
import Logo from '../../assets/images/shop.png';
import {Link} from 'react-router-dom'
import './Header.scss'
class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light custom-nav">
          <div class="container-fluid">
            <Link class="navbar-brand custom-link" to="/">
             <img src = {Logo} className="logo"/>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link custom-link active" aria-current="page" to = '/home'>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-link" aria-current="page" to='/shop'>
                   Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link custom-link" aria-current="page" to="/sign-in">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Header


