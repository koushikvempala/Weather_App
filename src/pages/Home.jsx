import React from "react";
import "./Home.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Intro />
      <WeatherCard />
      <Footer />
    </div>
  );
};

export default Home;
