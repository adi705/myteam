import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-left">
        <h1>myTeam</h1>
      </div>
      
      <div className="navbar-right">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
          <div className={`bar ${isOpen ? 'open' : ''}`} />
        </div>
      </div>

      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact </a></li>
        </ul>
        <div className="close-icon" onClick={toggleMenu}>
          <span>&times;</span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
