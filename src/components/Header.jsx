import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <AppBar position="static" sx={{ background: 'linear-gradient(to right, #4fc3f7, #81d4fa)', mb: 3 }}>
    <Toolbar>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, textAlign: 'center', color: '#fff' }}>
        🌦️ WeatherApp
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
