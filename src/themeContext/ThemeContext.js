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
  dark: true,
  theme: themes.light,
  toggle: () => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(localStorage.getItem("dark") === "true");

  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };
  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
