import { Box, Grid, Typography, Container, Button } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "grey.900", color: "white", pt: 6, pb: 4 }}>
      <Container>
        <Grid container spacing={4}>
          {[
            {
              title: "Get to Know Us",
              items: ["About", "Careers", "Press Releases"],
            },
            {
              title: "Connect with Us",
              items: ["Facebook", "Twitter", "Instagram"],
            },
            {
              title: "Make Money with Us",
              items: ["Sell on ShopEase", "Affiliate Program", "Advertise Products"],
            },
            {
              title: "Let Us Help You",
              items: ["Your Account", "Returns Centre", "Help"],
            },
          ].map((section, index) => (
            <Grid className="footer-section" item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>

              {section.items.map((item, i) => (
                <Typography    
                  key={i}
                  variant="body2"
                  sx={{
                    opacity: 0.8,
                    cursor: "pointer",
                    mb: 1,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            textAlign: "center",
            mt: 5,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            opacity: 0.7,
          }}
        >
          <Typography variant="body2">
            © 2026 ShopEase. All rights reserved.
          </Typography>
        </Box>
      </Container>
      
    </Box>
  );
}
