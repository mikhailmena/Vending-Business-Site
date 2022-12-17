import React from 'react'
import '../CssFiles/carousel.css'
import {Route, Link, Routes, useLocation} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
const Header = () => {
  return (
    <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                <span className="navbar-brand" href="#">Royals Ventures</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link  class="nav-link active" to="/">Home</Link>
                                {/* <a className="nav-link active"  href="/">Home</a> */}
                            </li>
                            <li className="nav-item">
                            <Link class="nav-link active" to="/Contact">Contact</Link>
                                {/* <a className="nav-link" href="/Contact">Contact Us</a> */}
                            </li>
                            <li className="nav-item">
                            <Link class="nav-link active" to="/About">About</Link>
                                {/* <a className="nav-link" href="/About">About Us</a> */}
                            
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header
