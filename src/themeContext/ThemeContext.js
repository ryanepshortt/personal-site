import React, { useState, createContext } from "react";

export const themes = {
  light: {
    foreground: "#666",
    background: "#ffffff",
    transition: "background 0.5s ease-in-out",
    cardTitle: "#000000",
    cardBackground: "#ffffff",
    overlayText: "#404040",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    transition: "background 0.5s ease-in-out",
    cardTitle: "#ffffff",
    cardBackground: "#262626",
    overlayText: "#ffffff",
  },
};

const initialState = {
  isDark: true,
  theme: themes.dark,
  toggle: () => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true",
  );

  const toggle = () => {
    console.log(!isDark);
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
