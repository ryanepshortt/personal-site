import React, { useState, useContext } from "react";
import ThemeContext from "./themeContext/ThemeContext";

import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import { PAGES } from "./constants/AppConstants";
import "./App.css";

const App = () => {
  let [showData, setShowData] = useState(PAGES.about);
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{
        background: theme.background,
        color: theme.foreground,
        transition: theme.transition,
      }}
    >
      <Header showData={showData} setShowData={setShowData} />
      <div className="content-container">{contentSwitcher(showData)}</div>
    </div>
  );
};

const contentSwitcher = (showData) => {
  switch (showData) {
    case PAGES.about:
      return <About />;
    case PAGES.contact:
      return <Contact />;
    case PAGES.projects:
      return <Projects />;
  }
};

export default App;
