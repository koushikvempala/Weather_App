import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">WeatherNow</p>
      <p className="footer-desc">
        Real-time weather information for cities worldwide.
      </p>
      <p className="footer-meta">Powered by OpenWeather API</p>
      <p className="footer-copy">
        © {new Date().getFullYear()} Koushik Vempala
      </p>
    </footer>
  );
};

export default Footer;
