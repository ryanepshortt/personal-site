import React, { useState, useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

import Header from "../../components/header/Header";
import Contact from "./contact/Contact";
import About from "./about/About";
import Projects from "./projects/Projects";
import { PAGES } from "../../constants/AppConstants";
import "./Home.css";

function Home() {
  const [pageKey, setPageKey] = useState(PAGES.about);
  const { theme } = useContext(ThemeContext);

  const contentSwitcher = (page) => {
    switch (page) {
      case PAGES.about:
        return <About />;
      case PAGES.resume:
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

export default Home;
