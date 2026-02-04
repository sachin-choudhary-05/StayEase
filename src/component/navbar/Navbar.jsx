import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


  
function Navbar()
  {
  return (
    <header className="header">
      <h1><i>StayEase</i></h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
};

export default Navbar;
