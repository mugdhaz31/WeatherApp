import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = () => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 3 }}>
    <CircularProgress color="primary" />
    <Typography sx={{ mt: 2 }}>Loading...</Typography>
  </Box>
);

export default Loader;
