import React, { useState, createContext, useMemo, useEffect } from "react";

export const themes = {
  light: {
    foreground: "#3a3a4a",
    background: "#f4f4f8",
    cardBackground: "#ffffff",
    cardTitle: "#0f0f14",
    overlayText: "#1e1e28",
    transition: "background 0.5s ease-in-out",
    border: "rgba(0,0,0,0.08)",
    surfaceAlt: "#eaeaf0",
  },
  dark: {
    foreground: "#8888aa",
    background: "#08080c",
    cardBackground: "#16161d",
    cardTitle: "#e8e8f0",
    overlayText: "#e8e8f0",
    transition: "background 0.5s ease-in-out",
    border: "rgba(255,255,255,0.06)",
    surfaceAlt: "#1e1e28",
  },
};

const initialState = {
  isDark: true,
  theme: themes.dark,
  toggle: () => {},
};

const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") !== "false", // default to dark
  );

  const toggle = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  const theme = isDark ? themes.dark : themes.light;

  const contextValue = useMemo(() => ({ isDark, theme, toggle }), [isDark]);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      html.style.backgroundColor = themes.dark.background;
    } else {
      html.classList.remove("dark");
      html.style.backgroundColor = themes.light.background;
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;
