import React, { useState } from "react";
import "./Style.css";
import useLocalStorage from "./customhook/useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [mode, setMode] = useState("Dark Mode");

  const handleLightDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setMode(mode === "Light Mode" ? "Dark Mode" : "Light Mode");
  };

  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <h2>Hello World !</h2>
      <span>
        <button className="btn" onClick={handleLightDarkMode}>
          {mode}
        </button>
      </span>
    </div>
  );
};

export default LightDarkMode;
