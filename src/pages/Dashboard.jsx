import { useMemo, useState, useEffect, useRef } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import getTheme from "../theme";

import Header from "../components/Header";
import HeaderFeatures from "../components/HeaderFeatures";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Recommended from "../components/Recommended";
import Personalized from "../components/Personalized";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

import { initDashboardAnimations } from "../animations/dashboardAnimations";

function Dashboard() {      
  const [darkMode, setDarkMode] = useState(false);
  const containerRef = useRef(null);  
  
  const theme = useMemo(
    () => getTheme(darkMode ? "dark" : "light"),     
    [darkMode]   
  );  
     
  useEffect(() => {   
    const ctx = initDashboardAnimations(containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />   
      <div ref={containerRef}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeaderFeatures />
        <Hero />
        <Products />
        <Recommended />
        <Personalized />
        <BackToTop />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Dashboard;
