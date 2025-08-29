import { Paper, Typography } from "@mui/material";

const ErrorMessage = ({ message }) => (
  <Paper elevation={3} sx={{ p: 2, mt: 3, backgroundColor: "#ff8a80", color: "#fff", textAlign: "center",}} >
    <Typography variant="body1">⚠️ {message}</Typography>
  </Paper>
);

export default ErrorMessage;
