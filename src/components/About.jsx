import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About the Project</h2>

      <p>
        <strong>WeatherNow</strong> is a single-page weather application built
        using <strong>React.js</strong>. The application allows users to search
        for real-time weather information by entering a city name.
      </p>

      <p>
        Weather data is fetched from the <strong>OpenWeatherMap API</strong> and
        the current temperature is displayed in Celsius with proper error
        handling for invalid inputs.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>City-based weather search</li>
        <li>Real-time temperature display</li>
        <li>Graceful handling of invalid city names</li>
        <li>Responsive UI for mobile and desktop</li>
      </ul>

      <h3>Technical Implementation</h3>
      <ul>
        <li>React Functional Components</li>
        <li>State management using React Hooks</li>
        <li>Client-side routing with React Router</li>
        <li>API integration using Fetch API</li>
        <li>Reusable component-based architecture</li>
      </ul>

      <h3>Project Objective</h3>
      <p>
        The purpose of this project is to practice real-world frontend
        development concepts such as API integration, routing, component reuse,
        and responsive design using React.
      </p>
    </div>
  );
};

export default About;
