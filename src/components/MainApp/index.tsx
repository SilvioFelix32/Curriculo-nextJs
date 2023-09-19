import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import { ThemeContext } from "../../context/Theme";

export function MainApp({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      {children}
    </ThemeProvider>
  );
}
