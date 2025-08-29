import { Paper, Stack, Button, Chip, Box } from "@mui/material";

const Favorites = ({ favorites, onSelect, onAdd }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 3, background: "linear-gradient(to right, #81d4fa, #4fc3f7)", color: "#fff", width: "100%", maxWidth: 700}}>
      <Stack direction="column" spacing={2} alignItems="center" sx={{ width: "100%" }}>
        <Button variant="contained" color="secondary" onClick={onAdd} sx={{ bgcolor: "#ffb74d", whiteSpace: "nowrap" }}>
          ➕ Add to Favorites
        </Button>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1, width: "100%",}}>
          {favorites.map((city, idx) => (
            <Chip key={idx} label={city} color="primary" onClick={() => onSelect(city)} sx={{ cursor: "pointer", bgcolor: "#0288d1", color: "#fff",}}/>
          ))}
        </Box>
      </Stack>
    </Paper>
  );
};

export default Favorites;
