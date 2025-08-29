const API_KEY = import.meta.env.VITE_API_KEY;

// Current Weather API
const CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
// Forecast API
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const fetchCurrentWeather = async (city) => {
  const response = await fetch(`${CURRENT_WEATHER_URL}?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchForecast = async (city) => {
  const response = await fetch(`${FORECAST_URL}?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || `Forecast not found`);
  }
  return response.json();
};
