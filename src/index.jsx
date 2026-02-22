import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import Softball from "./pages/softball/Softball";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home initialPage="about" />} />
          <Route path="/projects" element={<Home initialPage="projects" />} />
          <Route path="/contact" element={<Home initialPage="contact" />} />
          <Route path="/softball" element={<Softball />} />
        </Routes>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
);
