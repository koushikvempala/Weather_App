import React from "react";
import "./Home.css";

import Intro from "../components/Intro";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  return (
    <>
      <Intro />
      <WeatherCard />
    </>
  );
};

export default Home;
