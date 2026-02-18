import { Box, Typography, Container } from "@mui/material";

export default function Hero() {
  return (
    <Box className="hero-section"
      sx={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        py: 10,
      }}
    >
      <Container>
        <Typography variant="h1" gutterBottom>
          Discover Quality Products
        </Typography>
        <Typography variant="body1">
          Trusted brands · Best prices · Fast delivery
        </Typography>
      </Container>
    </Box>
  );
}
