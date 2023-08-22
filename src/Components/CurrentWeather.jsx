import React from "react";
import "../CSS/style.css";

function CurrentWeather({ currentWeather, theme }) {
  const { main, weather } = currentWeather;
  //   console.log(currentWeather);
  return (
    <div className={`current-weather ${theme}`}>
      <h2>Current Weather</h2>
      {main ? (
        <p className="current-weather-details">Temperature: {main?.temp}°C</p>
      ) : null}

      {weather ? (
        <p className="current-weather-details">
          Condition: {weather[0].description}
        </p>
      ) : null}
    </div>
  );
}

export default CurrentWeather;
