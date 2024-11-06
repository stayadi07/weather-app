import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyForecast from "./Components/HourlyForecast";
import DailyForecast from "./Components/DailyForecast";
import { ThemeProvider, createTheme, Button, Box } from "@mui/material";
import "./App.css";

const CURRENT_WEATHER_API_KEY = "65d709c454a41a9266e60744863a83aa";

function App() {
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [cityName, setCityName] = useState("");
  const [theme, setTheme] = useState("light");
  const [weatherIcon, setWeatherIcon] = useState(null);

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

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
      fetchCityName(location.lat, location.lon);
    }
  }, [location]);

  const fetchCurrentWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      // console.log({data})

      if (data.weather && data.weather.length > 0) {
        setWeatherIcon(
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
      }
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
      if (data.weather && data.weather.length > 0) {
        setWeatherIcon(
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
      }
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

  const handleWeatherDataFetch = async ({ lat, lon }) => {
    try {
      await fetchCurrentWeatherData(lat, lon);
      await fetchHourlyForecastData(lat, lon);
      await fetchDailyForecastData(lat, lon);
      await fetchCityName(lat, lon);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCityName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${CURRENT_WEATHER_API_KEY}`
      );
      const data = await response.json();
      setCityName(data.name);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={`App ${theme}`}>
        <Header fetchWeatherData={handleWeatherDataFetch} theme={theme} />

        <Box textAlign="center" marginY={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleTheme}
            sx={{
              position: "absolute",
              right: 0,
              marginRight: "12px",
              backgroundColor: theme === "light" ? "darkseagreen" : "black",
              color: theme === "light" ? "#000" : "white",
              fontWeight: "500px",
            }}
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </Button>
        </Box>

        <CurrentWeather
          currentWeather={currentWeather}
          theme={theme}
          cityName={cityName}
          weatherIcon={weatherIcon}
        />
        <HourlyForecast
          hourlyForecast={hourlyForecast}
          theme={theme}
          cityName={cityName}
          weatherIcon={weatherIcon}
        />
        <DailyForecast
          dailyForecast={dailyForecast}
          theme={theme}
          cityName={cityName}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
