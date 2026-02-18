import { useState } from "react";
import { Box, Button, TextField, Typography, Paper, useTheme, useMediaQuery,} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, paperAnimation } from "../animations/loginAnimations";

function Login() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "shiva9996@gmail.com" && password === "shiva9996") {
      localStorage.setItem("isAuth", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
        px: 2,
      }}
    >
      <Paper
        component={motion.div}
        {...paperAnimation}
        elevation={8}
        sx={{
          p: isMobile ? 3 : 5,
          width: "100%",
          maxWidth: 420,
          borderRadius: 4,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h4" textAlign="center" gutterBottom>
              Welcome Back
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body2"
              textAlign="center"
              mb={3}
              color="text.secondary"
            >
              Please login to continue
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3, py: 1.3, borderRadius: 3 }}
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </motion.div>
        </motion.div>
      </Paper>
    </Box>
  );
}

export default Login;
