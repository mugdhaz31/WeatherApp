import { Box } from "@mui/material";
import ForecastCard from "./ForecastCard";

const ForecastList = ({ forecastArray }) => {
  const dailyForecast = forecastArray.filter((item, index) => index % 8 === 0);
  return (
    <Box sx={{ display: "flex", overflowX: "auto", gap: 2, py: 2,}}>
      {dailyForecast.map((f, idx) => (
        <ForecastCard key={idx} forecast={f} />
      ))}
    </Box>
  );
};

export default ForecastList;
