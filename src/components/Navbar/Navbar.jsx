import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../Navbar/images/logo.jpg';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="My Image" className="logo-img" />
      </div>
      <ul
        className={isMobile ? "nav-links nav-links-mobile open" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="#Home" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="#services" className="nav-link">
          <li>Services</li>
        </Link>
        <Link to="#About" className="nav-link">
          <li>About Us</li>
        </Link>
        <Link to="#ourwork" className="nav-link">
          <li>Our Work</li>
        </Link>
        <Link to="#blog" className="nav-link">
          <li>Blog</li>     
           </Link>
        <Link to="#price" className="nav-link">
          <li>Pricing</li>
        </Link>
        <Link to="#footer" className="nav-link nav-link-contact">
          <li>Contact us</li>
        </Link>
      </ul>
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <AiOutlineClose className="menu-icon-close" />
        ) : (
          <AiOutlineMenu className="menu-icon-open" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
