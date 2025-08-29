import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement} from "chart.js";
import { Paper, Typography, Box } from "@mui/material";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const WeatherChart = ({ forecastArray }) => {
  const labels = forecastArray
    .slice(0, 12)
    .map((item) => new Date(item.dt * 1000).getHours() + ":00");
  const temps = forecastArray.slice(0, 12).map((item) => item.main.temp);

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderColor: "#0288d1",
        backgroundColor: "rgba(2, 136, 209, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        labels: { color: "#fff" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
      },
      y: {
        ticks: { color: "#fff" },
      },
    },
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        width: "100%",
        background: "linear-gradient(to right, #81d4fa, #4fc3f7)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mx: "auto",
        flexShrink: 0,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
        Next 12 Hours Temperature
      </Typography>

      <Box
        sx={{
          overflowX: "auto",
          overflowY: "hidden",
          p: 1,
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#81d4fa",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#0288d1",
            borderRadius: "10px",
          },
        }}
      >
        <Box sx={{ width: "550px", flexShrink: 0 }}>
          <Line  data={data}  options={options}  height={350} style={{ maxHeight: "350px" }}  />
        </Box>
      </Box>
    </Paper>
  );
};

export default WeatherChart;
