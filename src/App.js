import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import CurrentWeather from './Components/CurrentWeather';
import HourlyForecast from './Components/HourlyForecast';
import DailyForecast from './Components/DailyForecast';
import './App.css';

const CURRENT_WEATHER_API_KEY = '65d709c454a41a9266e60744863a83aa';

function App() {
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetchCurrentWeatherData(location.lat, location.lon);
      fetchHourlyForecastData(location.lat, location.lon);
      fetchDailyForecastData(location.lat, location.lon);
    }
  }, [location]);

  const fetchCurrentWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      // console.log({data})
      setCurrentWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHourlyForecastData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&cnt=2&units=metric`
      );
      const data = await response.json();
      setHourlyForecast(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDailyForecastData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      // console.log({data})
      setDailyForecast(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWeatherDataFetch = async ({lat,lon}) => {
    try {
      await fetchCurrentWeatherData(lat,lon);
      await fetchHourlyForecastData(lat,lon);
      await fetchDailyForecastData(lat,lon);
    } catch (error) {
      console.error(error);
    }
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      
      <Header fetchWeatherData={handleWeatherDataFetch}theme={theme} />
      <button className="theme-switcher" onClick={toggleTheme}>
        Switch Theme
      </button>
      <CurrentWeather currentWeather={currentWeather} theme={theme}/>
      <HourlyForecast hourlyForecast={hourlyForecast} theme={theme}/>
      <DailyForecast dailyForecast={dailyForecast} theme={theme} />
    </div>
  );
}

export default App;
