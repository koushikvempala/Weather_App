import React, { useState } from "react";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setResult("Please enter a city name");
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        const temp = data.main.temp - 273.15;
        setResult(`Temperature in ${city}: ${temp.toFixed(2)} °C`);
        setCity("");
      })
      .catch(() => setResult("Invalid city name"));
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Weather Search</h3>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <input type="submit" value="Get Temperature" />
        </form>

        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
