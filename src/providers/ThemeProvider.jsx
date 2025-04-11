"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
