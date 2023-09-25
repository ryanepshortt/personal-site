import React, { useState, useContext } from "react";
import ThemeContext from "./themeContext/ThemeContext";

import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import { PAGES } from "./constants/AppConstants";
import "./App.css";

function App() {
  const [pageKey, setPageKey] = useState(PAGES.about);
  const { theme } = useContext(ThemeContext);

  const contentSwitcher = (page) => {
    switch (page) {
      case PAGES.about:
        return <About />;
      case PAGES.contact:
        return <Contact />;
      case PAGES.projects:
        return <Projects />;
      default:
        return null;
    }
  };
  return (
    <div
      className="App"
      style={{
        background: theme.background,
        color: theme.foreground,
        transition: theme.transition,
      }}
    >
      <Header pageKey={pageKey} setPageKey={setPageKey} />
      <div className="content-container">
        <div className="content">{contentSwitcher(pageKey)}</div>
      </div>
    </div>
  );
}

export default App;
