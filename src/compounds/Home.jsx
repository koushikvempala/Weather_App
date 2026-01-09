import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const Handler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setResult("Please enter a city name");
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => {
        const celsius = data.main.temp - 273.15;
        setResult(`Temperature at ${city}: ${celsius.toFixed(2)} °C`);
        setCity("");
      })
      .catch(() => setResult("Invalid city name"));
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="card-title">Weather App</h2>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={city}
            onChange={Handler}
            placeholder="Enter city name"
          />
          <input type="submit" value="Get Temperature" />
        </form>

        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default Home;
