import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">WeatherNow</span>
        <span className="tagline">Real-time Weather App</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
