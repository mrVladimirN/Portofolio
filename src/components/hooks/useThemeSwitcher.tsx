import React, { useEffect, useState } from "react";
export const useThemeSwitcher = () => {
  const [theme, setTheme] = useState<any>("light");

  useEffect(() => {
    // Get theme preference from localStorage or set it to "light" by default
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Check for preferred color scheme in browser
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);

  // Update theme preference in localStorage and toggle between "dark" and "light" themes
  const toggleTheme = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    if (updatedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", updatedTheme);
    setTheme(updatedTheme);
  };

  return [theme, toggleTheme];
};
