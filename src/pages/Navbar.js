import React from 'react';
import { NavLink } from 'react-router-dom';  // Use NavLink for active links
import '../App.css';  // Assuming your styles are here

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/prediction" className="nav-link" activeClassName="active-link">Prediction</NavLink></li>
        <li><NavLink to="/statistics" className="nav-link" activeClassName="active-link">Statistics</NavLink></li>
        <li><NavLink to="/crops" className="nav-link" activeClassName="active-link">Crops</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
