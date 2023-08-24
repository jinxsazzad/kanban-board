import { useEffect, useState } from "react";

const useDarkMode = () => {
  // Get the current theme from localStorage or default to "light"
  const currentTheme = localStorage.theme || "light";

  // Initialize state to hold the theme
  const [theme, setTheme] = useState(currentTheme);

  // Determine the opposite color theme
  const colorTheme = theme === "dark" ? "light" : "dark";

  // Apply the selected theme to the DOM
  useEffect(() => {
    // Access the root HTML element
    const root = window.document.documentElement;

    // Remove the previous color theme class and add the current theme class
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // Store the current theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  // Return the opposite color theme and a function to toggle the theme
  return [colorTheme, setTheme];
};

export default useDarkMode;

