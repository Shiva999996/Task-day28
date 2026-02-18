import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

import headphones from "../assets/Headphone.jpg";
import smartphone from "../assets/smartphone.jpg";
import laptop from "../assets/laptop.jpg";
import tv from "../assets/tv.jpg";

export default function Products() {
  const products = [
    {
      img: headphones,
      title: "Sony Wireless Headphones",
      price: "₹24,999",
      oldPrice: "₹29,999",
    },
    {
      img: smartphone,
      title: "Premium Smartphone",
      price: "₹49,999",
      oldPrice: "₹59,999",
    },
    {
      img: laptop,
      title: "Ultra Slim Laptop",
      price: "₹89,999",
      oldPrice: "₹99,999",
    },
    {
      img: tv,
      title: "55-inch 4K Smart TV",
      price: "₹54,990",
      oldPrice: "₹64,990",
    },
  ];

  return (
    <Box className="products-section" sx={{ py: 6 }}>
      <Container>
        <Typography variant="h2" gutterBottom>
          Featured Products
        </Typography>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}




