import Intro from "../components/Intro";
import WeatherCard from "../components/WeatherCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <WeatherCard />
    </div>
  );
};

export default Home;
