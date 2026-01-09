import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="logo">🌤 WeatherNow</h1>
        <span className="tagline">Live weather updates</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
