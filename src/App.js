import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Choose from "./components/Choose";
import Home from "./components/Home";
import "./scss/index.scss";
import Services from "./components/Services";
import Categories from "./components/Categories";
import Recommend from "./components/Recommend";
import Products from "./components/Products";
import Promo from "./components/Promo";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import scrollreveal from "scrollreveal";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .services-container,
        .categories-container,
        .recommend-container,
        .choose-us-container,
        .products-container,
        .promo-container,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  useEffect(() => {
    const home = document.getElementsByClassName("home");
    if (home.length > 0) {
      home[0].style.transform = "none";
    }
  }, []);

  return (
    <Router>
      <div data-theme={theme} className="app">
        <ScrollTop />
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
        <Routes>
          <Route path="/X-Shop" element={<Navigate to="/" replace />} />
          <Route path="/" element={
            <>
              <Home />
              <Services />
              <Categories />
              <Recommend />
              <Choose />
              <Products />
              <Promo />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
