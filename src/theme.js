import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#2563EB",
      },
      secondary: {
        main: "#7C3AED",
      },
      background: {
        default: mode === "dark" ? "#020617" : "#F9FAFB",
        paper: mode === "dark" ? "#0f172a" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "Roboto, system-ui, sans-serif",
      h1: { fontSize: "2.5rem", fontWeight: 700 },
      h2: { fontSize: "2rem", fontWeight: 600 },
      h3: { fontSize: "1.5rem", fontWeight: 600 },
      h4: { fontSize: "1.2rem", fontWeight: 600 },
      body1: { fontSize: "1rem" },
      body2: { fontSize: "0.875rem" },
    },
    shape: {
      borderRadius: 12,
    },
  });

export default getTheme;
