// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h1>IRCTC</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;