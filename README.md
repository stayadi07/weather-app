**Weather Dashboard 🌦️**
This Weather Dashboard is a React app that displays current, hourly, and daily weather information based on the user's geolocation or a specified city. The app features dynamic theme switching (light and dark mode), and uses the OpenWeather API for data retrieval.

**Features:**
Current Weather: Displays current weather, temperature, and conditions icon based on geolocation or searched city.

Hourly Forecast: Shows weather data and condition icons for the next few hours.

Daily Forecast: Provides weather conditions, temperature range, and icons for the next several days.

Theme Switcher: Allows toggling between light and dark themes with a button styled conditionally based on the selected theme.

**Tech Stack**
React: Core UI library.
Material-UI (MUI): For styling and creating responsive, accessible components.
OpenWeather API: Fetches real-time weather data, including current conditions, hourly, and daily forecasts.

**Getting Started**
Prerequisites
Node.js: Make sure you have Node.js installed (recommended version >= 14.0).
OpenWeather API Key: Sign up at OpenWeather to get an API key.

**Components**
App.js: The main component that holds the state for the app's theme, location, and fetched weather data. It also manages geolocation and fetches weather data based on location or city name input.
Header: Contains a search bar for entering a city name and triggers weather data fetching. The theme is dynamically applied to the header.
CurrentWeather: Displays the current weather details, including temperature, weather condition, and icon.
HourlyForecast: Shows the forecast and condition icons for the upcoming hours.
DailyForecast: Lists the daily weather forecast, including min and max temperatures, condition icons, and other weather details.

**API Integration**
This app uses the OpenWeather API for fetching:

Current Weather: https://api.openweathermap.org/data/2.5/weather
Hourly & Daily Forecast: https://api.openweathermap.org/data/2.5/forecast

**Theme Switching**
The theme can be toggled between light and dark modes using Material-UI's theme provider. Conditional styling is applied based on the theme to ensure a consistent user experience.

![image](https://github.com/user-attachments/assets/cc8ce89b-4f1a-40f0-b1a4-b7da03ecc7e3)

![image](https://github.com/user-attachments/assets/2f47cfa8-cc7e-4124-b7c9-53f0819a2113)

