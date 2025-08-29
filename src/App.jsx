import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Header from "./components/Header";
import SearchBox from "./components/searchBox";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import WeatherChart from "./components/weatherChart";
import Favorites from "./components/Favorites";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { fetchCurrentWeather, fetchForecast } from "./api";

const DEFAULT_CITY = "New York";

const App = () => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getWeatherData(DEFAULT_CITY);
  }, []);

  const getWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      const weather = await fetchCurrentWeather(cityName);
      const forecastData = await fetchForecast(cityName);
      setCurrentWeather(weather);
      setForecast(forecastData.list);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{ minHeight: "100vh", width: "100%", bgcolor: "#121212", color: "#fff", overflowX: "hidden", overflowY: "auto"}}>
      <Grid container sx={{ width: "100%", m: 0 }} spacing={2}>
        {/* LEFT COLUMN */}
        <Grid item xs={12} md={12}
          sx={{ display: "flex", flexDirection: "column", height: "auto", p: 2, gap: 2, }}>
          <Header />
          <SearchBox onSearch={getWeatherData} />

          <Box
            sx={{ flex: 1, overflowY: "auto", pr: 1, display: "flex", flexDirection: "column", gap: 2,}}>
            {error && <ErrorMessage message={error} />}
            {loading && <Loader />}
            {!currentWeather && !loading && !error && (
              <Box>Enter a city to see the weather</Box>
            )}
            {currentWeather && <CurrentWeather weatherData={currentWeather} />}
            {forecast.length > 0 && <ForecastList forecastArray={forecast} />}
          </Box>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} md={12} sx={{ display: "flex", flexDirection: "column", height: "auto", overflow: "visible", p: 2, pr: 3, gap: 2, }} >
          <Box
            sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", width: "100%", gap: 2,}}>
            {forecast.length > 0 && (
              <WeatherChart forecastArray={forecast} />)}
            <Favorites favorites={favorites} onSelect={getWeatherData} onAdd={() => setFavorites([...new Set([...favorites, city])])}/>
          </Box>
        </Grid>
        
      </Grid>
      <Footer />
    </Box>
  );
};

export default App;
