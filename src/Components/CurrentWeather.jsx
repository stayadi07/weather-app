import React from "react";
import "../CSS/style.css";
import { Avatar } from "@mui/material";

function CurrentWeather({ currentWeather, theme, cityName, weatherIcon }) {
  const { main, weather } = currentWeather;
  //   console.log(currentWeather);
  return (
    <div className={`current-weather ${theme === "dark" ? "dark" : null}`}>
      <h2>Current Weather in {cityName} </h2>
      {main ? (
        <p className="current-weather-details">Temperature: {main?.temp}°C</p>
      ) : null}

      {weather ? (
        <div className="current-weather-details">
          Condition: {weather[0].description}
          {weatherIcon && <Avatar src={weatherIcon} alt="Weather Icon" />}
        </div>
      ) : null}
    </div>
  );
}

export default CurrentWeather;
