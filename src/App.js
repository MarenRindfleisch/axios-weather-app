import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  function getWeather(response) {
    setWeather(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=19a7287a43046ce253c65a1908dfe8b1&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="search"
          placeholder="Type a city"
          autoFocus="on"
        />
        <input type="submit" value="Search" />
      </form>
      <div>{weather}</div>
    </div>
  );
}

export default App;
