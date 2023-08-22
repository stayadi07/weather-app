import React, { useState } from "react";
import "../CSS/style.css";

function Header({ fetchWeatherData, theme }) {
  const [cityInput, setCityInput] = useState("");
  const API_KEY = "65d709c454a41a9266e60744863a83aa";

  const handleCityInput = (event) => {
    setCityInput(event.target.value);
  };

  const handleSearch = () => {
    if (cityInput.trim() !== "") {
      fetchWeatherDataByCity(cityInput);
    }
  };

  const fetchWeatherDataByCity = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      const location = data?.coord;
      fetchWeatherData(location);

      // Handle fetched data as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className={`header ${theme}`}>
      <h1>Weather Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name..."
          value={cityInput}
          onChange={handleCityInput}
          className="input-field"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
}

export default Header;
