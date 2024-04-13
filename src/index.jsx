import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";
import Softball from "./pages/softball/Softball";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/softball" element={<Softball />} />
        </Routes>
      </ThemeProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root"),
);
