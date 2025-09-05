import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';
import NavbarSearch from './NavbarSearch';
import { FaArrowUp  } from "react-icons/fa";
import '../componentsCss/mainfile.css';
export default function Navbar(props) {
  const location = useLocation();
  return (
     <nav id='top' className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* <a href="#top" className='upbutton' style={{ position: "fixed",zIndex:"1",textDecoration:"none", bottom: "20px", right: "20px", background: "black", color: "white", padding: "10px", borderRadius: "8px" }}>
         <FaArrowUp className="hover-pointer" />
      </a> */}
      <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className='upbutton' style={{}}>
        <FaArrowUp className="hover-pointer" />
      </a>

          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">{props.title}</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} aria-current="page" to="/home" >{props.home}</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">{props.about}</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">{props.contact}</Link>
                </li>
              </ul>
              <div className={`form-check form-switch me-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleModeBtn} type="checkbox" role="switch" id="switchCheckDefault" />
                <label className="form-check-label" htmlFor="switchCheckDefault">{props.label}</label>
              </div>
              <NavbarSearch/>
            </div>
          </div>
        </nav>
  )
}



Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    home: "Home",
    about: "About uss",
    contact: "Contact us",
}

