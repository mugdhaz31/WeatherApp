import { TextField, Button, Stack, Paper } from "@mui/material";
import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") onSearch(input);
    setInput("");
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3, background: 'linear-gradient(to right, #81d4fa, #4fc3f7)', }}>
      <form onSubmit={handleSubmit}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" alignItems="center">
          <TextField type="text" label="Enter City" variant="filled" value={input} onChange={(e) => setInput(e.target.value)} required
            sx={{ backgroundColor: "rgba(255,255,255,0.9)", borderRadius: 1, input: { color: "#000" }, width: { xs: "100%", sm: "300px" },}} />
          <Button type="submit" variant="contained" color="secondary"
            sx={{ bgcolor: "#ffb74d", color: "#fff", "&:hover": { bgcolor: "#ffa726" }, width: { xs: "100%", sm: "120px" },}} >
            Search
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default SearchBox;
