import React, { useContext, useEffect, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../../contexts/Theme";
import Cookies from "js-cookie";
//styles
import { StyledButton } from "./styled";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkModeEnabled(theme === "dark");
  }, [theme]);

  function toggleTheme() {
    const newTheme = isDarkModeEnabled ? "light" : "dark";
    setIsDarkModeEnabled(!isDarkModeEnabled);
    setTheme(newTheme);
    Cookies.set("color-theme", newTheme, {
      expires: 365,
      path: "/",
    });
  }

  return (
    <StyledButton onClick={toggleTheme}>
      {isDarkModeEnabled ? <MdOutlineLightMode /> : <MdDarkMode />}
    </StyledButton>
  );
};
