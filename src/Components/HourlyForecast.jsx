import React from "react";
import "../CSS/style.css";
import { Avatar } from "@mui/material";

function HourlyForecast({ hourlyForecast, theme, cityName }) {
  const { list } = hourlyForecast;
  console.log("list", list);
  return (
    <div className={`hourly-forecast ${theme === "dark" ? "dark" : null}`}>
      <h2>Hourly Forecast of {cityName}</h2>
      <div className={`hourly-list ${theme === "dark" ? "dark" : null}`}>
        {list
          ? list.map((hourData, index) => (
              <div
                key={index}
                className={`hourly-item ${theme === "dark" ? "dark" : null}`}
              >
                <p>
                  Time: {new Date(hourData?.dt * 1000).toLocaleTimeString()}
                </p>
                <p>Temperature: {hourData?.main?.temp}°C</p>
                <div className="hourly-weather-details">
                  Condition: {hourData?.weather[0].description}{" "}
                  <Avatar
                    src={`https://openweathermap.org/img/wn/${hourData?.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />{" "}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default HourlyForecast;
