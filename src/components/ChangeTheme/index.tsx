import React, { useContext, useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../context/Theme";
//styles
import { StyledButton } from "./styled";

export const ThemeToggle: React.FC = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const { setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    const newTheme = isDarkModeEnabled ? "light" : "dark";
    setIsDarkModeEnabled(!isDarkModeEnabled);
    setTheme(newTheme);
  }

  return (
    <StyledButton onClick={toggleTheme}>
      {isDarkModeEnabled ? <MdOutlineLightMode /> : <MdDarkMode />}
    </StyledButton>
  );
};
