import React from "react";
import "../CSS/style.css";
import { Avatar } from "@mui/material";

function DailyForecast({ dailyForecast, theme, cityName, weatherIcon }) {
  const { list } = dailyForecast;
  console.log("first", list);
  return (
    <div className={`daily-forecast ${theme === "dark" ? "dark" : null}`}>
      <h2>Daily Forecast of {cityName}</h2>
      <div className="daily-list">
        {list
          ? list.map((dayData, index) => (
              <div
                key={index}
                className={`daily-item ${theme === "dark" ? "dark" : null}`}
              >
                <p>Date: {new Date(dayData.dt * 1000).toLocaleDateString()}</p>
                <p>Time: {new Date(dayData?.dt * 1000).toLocaleTimeString()}</p>
                <p>Temperature: {dayData?.main?.temp}°C</p>
                <div className="daily-weather-details">
                  <p>Condition: {dayData?.weather[0].description}</p>
                  <Avatar
                    src={`https://openweathermap.org/img/wn/${dayData?.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default DailyForecast;
