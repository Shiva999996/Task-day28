import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function ProductCard({ img, title, price, oldPrice }) {
  return (
    <Card 
      elevation={3}
      sx={{
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt={title}
        sx={{
          height: 190,
          objectFit: "contain",
          p: 2,
        }}
      />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body1">
          {price}{" "}
          {oldPrice && (
            <Box
              component="span"
              sx={{
                color: "text.secondary",
                textDecoration: "line-through",
                ml: 1,
              }}
            >
              {oldPrice}
            </Box>
          )}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
