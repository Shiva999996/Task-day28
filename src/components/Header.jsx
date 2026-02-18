import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/"); 
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          ShopEase
        </Typography>

        <Box
        sx={{ flex: 1, mx: 4 }}>
          <TextField
            fullWidth 
            size="small"
            variant="outlined"
            placeholder="Search products, brands and more"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
        </Box> 

        <Button
          variant="contained"
          color="secondary"
          onClick={() => setDarkMode(!darkMode)}
          sx={{ mr: 2 }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
