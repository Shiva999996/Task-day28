import { Box, Typography } from "@mui/material";

export default function BackToTop() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      onClick={scrollTop}
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        textAlign: "center",
        py: 2,
        cursor: "pointer",
        color: "white",
        "&:hover": { opacity: 0.9 },
      }}
    >
      <Typography variant="body1" fontWeight={500}>
        Back to top
      </Typography>
    </Box>
  );
}
