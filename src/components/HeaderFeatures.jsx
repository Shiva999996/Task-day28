import { Box, Typography } from "@mui/material";

export default function HeaderFeatures() {
  const items = [
    "All",
    "Best Sellers",
    "Mobiles",
    "Electronics",
    "Fashion",
    "Customer Service",
  ];

  return (
    <Box 
      sx={{
        display: "flex",
        gap: 3,
        px: 4,
        py: 1,
        bgcolor: "secondary.main",
        color: "white",
        fontSize: 14,
        flexWrap: "wrap",
      }}
    >
      {items.map((item, index) => (
        <Typography key={index} variant="body2" sx={{ cursor: "pointer" }}>
          {item}
        </Typography>
      ))}
    </Box>
  );
}
