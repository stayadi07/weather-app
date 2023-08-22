import React from "react";
import "../CSS/style.css";

function HourlyForecast({ hourlyForecast, theme }) {
  const { list } = hourlyForecast;
  return (
    <div className={`hourly-forecast ${theme}`}>
      <h2>Hourly Forecast</h2>
      <div className={`hourly-list ${theme}`}>
        {list
          ? list.map((hourData, index) => (
              <div key={index} className={`hourly-item ${theme}`}>
                <p>
                  Time: {new Date(hourData?.dt * 1000).toLocaleTimeString()}
                </p>
                <p>Temperature: {hourData?.main?.temp}°C</p>
                <p>Condition: {hourData.weather[0].description}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default HourlyForecast;
