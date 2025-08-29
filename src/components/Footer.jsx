import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 4, py: { xs: 2, sm: 3 }, px: 2, textAlign: "center", background: "linear-gradient(to right, #0288d1, #4fc3f7)", color: "#fff",}}  >
      <Typography variant="body2" sx={{mb: 1,fontSize: { xs: "0.85rem", sm: "1rem" },}}>
        🌦️ Weather Dashboard | Built with React + Chart.js
      </Typography>
      <Typography variant="caption" sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem" } }} >
        © {new Date().getFullYear()} Weather App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
