import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import WeatherIcon from "../Assets/mostly-sunny.png";
import "../CSS/style.css";

function Header({ fetchWeatherData, theme }) {
  const [cityInput, setCityInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const API_KEY = "65d709c454a41a9266e60744863a83aa";

  const handleCityInput = (event) => {
    setCityInput(event.target.value);
    setErrorMessage(""); // Clear error message on input change
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

      if (response.ok) {
        const location = data.coord;
        fetchWeatherData(location);
        setErrorMessage(""); // Clear error message if data is fetched successfully
      } else {
        // Set error message for an invalid city
        setErrorMessage("City not found. Please enter a valid city name.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

  return (
    // <header className={`header ${theme}`}>
    //   <h1>Weather Dashboard</h1>
    //   <div className="search-bar">
    //     <input
    //       type="text"
    //       placeholder="Enter city name..."
    //       value={cityInput}
    //       onChange={handleCityInput}
    //       className="input-field"
    //     />
    //     <button onClick={handleSearch}>Search</button>
    //   </div>
    //   {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
    // </header>
    <header className={`header ${theme}`}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {" "}
        <img
          src={WeatherIcon}
          alt="Weather Icon"
          width={40}
          style={{ paddingLeft: "10px" }}
        />
        <Typography variant="h4" component="h1">
          Weather Dashboard
        </Typography>
      </Box>

      <div
        className="search-bar"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <TextField
          label="Enter city name..."
          variant="outlined"
          value={cityInput}
          onChange={handleCityInput}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          fullWidth
          sx={{ marginRight: "10px" }}
        >
          Search
        </Button>
      </div>
    </header>
  );
}

export default Header;
