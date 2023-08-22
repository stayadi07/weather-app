import React from "react";
import "../CSS/style.css";

function DailyForecast({ dailyForecast, theme }) {
  const { list } = dailyForecast;
  return (
    <div className={`daily-forecast ${theme}`}>
      <h2>Daily Forecast</h2>
      <div className="daily-list">
        {list
          ? list.map((dayData, index) => (
              <div key={index} className={`daily-item ${theme}`}>
                <p>Date: {new Date(dayData.dt * 1000).toLocaleDateString()}</p>
                <p>Time: {new Date(dayData?.dt * 1000).toLocaleTimeString()}</p>
                <p>Temperature: {dayData?.main?.temp}°C</p>
                <p>Condition: {dayData?.weather[0].description}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default DailyForecast;
