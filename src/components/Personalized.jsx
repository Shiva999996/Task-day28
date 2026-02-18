import { Box, Typography, Button } from "@mui/material";

export default function Personalized() {
  return (
    <Box className="personalized-section"
      sx={{
        py: 8,
        textAlign: "center",
        bgcolor: "background.paper",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="h3" gutterBottom>
        See personalized recommendations
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ px: 4, py: 1.5, mb: 2 }}
      >
        Sign in
      </Button>

      <Typography variant="body2" color="text.secondary">
        New customer? Start here.
      </Typography>
    </Box>
  );
}
  