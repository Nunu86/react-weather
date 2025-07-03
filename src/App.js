import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "12b0dde9051ba74d68b2f30cf1199127";

  async function getWeather() {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather(null);
    }
  }

  return (
    <div>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
