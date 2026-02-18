import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

import smartwatch from "../assets/smartwatch.jpg";
import keyboard from "../assets/keyboard.jpg";
import mouse from "../assets/mouse1.jpg";
import earbuds from "../assets/earbuds.jpg";

export default function Recommended() {
    const products = [
        {
            img: smartwatch,
            title: "Smart Watch Series 9",
            price: "₹12,999",
            oldPrice: "₹15,999",
        },
        {
            img: keyboard,
            title: "Mechanical RGB Keyboard",
            price: "₹3,499",
            oldPrice: "₹4,999",
        },
        {
            img: mouse,
            title: "Wireless Gaming Mouse",
            price: "₹2,199",
            oldPrice: "₹3,499",
        },
        {
            img: earbuds,
            title: "Noise Wireless Earbuds",
            price: "₹4,999",
            oldPrice: "₹6,999",
        },
    ];

    return (
        <Box  className="recommended-section" 
              sx={{ py: 6, bgcolor: "background.paper" }}>
            <Container maxWidth="lg">
                <Typography variant="h2" gutterBottom>
                    Recommended For You
                </Typography>

                <Grid container spacing={3}>
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
