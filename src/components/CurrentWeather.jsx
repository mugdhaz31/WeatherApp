import { Paper, Typography, Stack } from "@mui/material";

const CurrentWeather = ({ weatherData }) => {
  return (
    <Paper elevation={3} sx={{ my: 3, p: 3, textAlign: "center", background: 'linear-gradient(to right, #4fc3f7, #0288d1)', color: "#fff",}}>
      <Typography variant="h4">{weatherData.name}</Typography>
      <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
        {weatherData.weather[0].description}
      </Typography>
      <Stack direction="row" spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        <Typography>🌡️ {weatherData.main.temp}°C</Typography>
        <Typography>💨 {weatherData.wind.speed} m/s</Typography>
        <Typography>💧 {weatherData.main.humidity}%</Typography>
      </Stack>
    </Paper>
  );
};

export default CurrentWeather;
