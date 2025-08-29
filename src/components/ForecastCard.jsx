import { Paper, Typography } from "@mui/material";

const ForecastCard = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000).toLocaleDateString();
  return (
    <Paper elevation={2} sx={{ minWidth: 120, p: 2, textAlign: "center", background: 'linear-gradient(to bottom, #4fc3f7, #81d4fa)', color: "#fff" }} >
      <Typography>{date}</Typography>
      <Typography sx={{ textTransform: "capitalize" }}>{forecast.weather[0].main}</Typography>
      <Typography>🌡️ {forecast.main.temp}°C</Typography>
    </Paper>
  );
};

export default ForecastCard;
