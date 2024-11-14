// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
//import './Navbar.css';  // Add some basic styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/prediction">Prediction</Link></li>
        <li><Link to="/statistics">Statistics</Link></li>
        <li><Link to="/crops">Crops</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
