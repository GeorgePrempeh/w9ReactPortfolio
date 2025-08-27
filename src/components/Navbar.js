import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
// Navbar component for site navigation
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="navbar-icon" />
        George Prempeh
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
