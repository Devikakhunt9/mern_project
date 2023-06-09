import React from "react";
import {  Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div class="header-menubar  sticky-top" style={{ fontSize: 20 }}>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-1 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link " aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/about"
                    class="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/contact"
                    class="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/inquiry"
                    class="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    Inquiry
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/addproduct"
                    class="nav-link "
                    aria-current="page"
                    href="#"
                  >
                    addproduct
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

// import React from 'react'
// import Header from '../pages/Header'
// import Footer from '../pages/Footer'
// import { Link, Outlet } from 'react-router-dom'
// import About from '../pages/About'

// export default function Navbar() {
//   return (
//     <>
//     <Link to='/' >ABC</Link>
//     <Link to='/about'>About</Link>
//     </>
//   )
// }
