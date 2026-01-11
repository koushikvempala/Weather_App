import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <h2>Project Features</h2>

      <div className="feature-card">
        <h4>City-Based Weather Search</h4>
        <p>
          Allows users to search weather information by entering the name of any
          city worldwide.
        </p>
      </div>

      <div className="feature-card">
        <h4>Real-Time Weather Data</h4>
        <p>
          Fetches live temperature data from the OpenWeatherMap API and displays
          it in Celsius.
        </p>
      </div>

      <div className="feature-card">
        <h4>Input Validation & Error Handling</h4>
        <p>
          Handles empty inputs and invalid city names gracefully with user-
          friendly messages.
        </p>
      </div>

      <div className="feature-card">
        <h4>Reusable Component Architecture</h4>
        <p>
          Built using reusable React components to ensure clean structure and
          easy scalability.
        </p>
      </div>

      <div className="feature-card">
        <h4>Client-Side Routing</h4>
        <p>
          Uses React Router to enable smooth navigation between Home, About, and
          Features pages without page reloads.
        </p>
      </div>

      <div className="feature-card">
        <h4>Responsive Design</h4>
        <p>
          Optimized for mobile, tablet, and desktop devices using modern CSS
          practices.
        </p>
      </div>
    </div>
  );
};

export default Features;
