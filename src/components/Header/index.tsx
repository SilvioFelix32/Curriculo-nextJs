import React from "react";
import { ThemeToggle, LanguageToggle } from "../Buttons";
import { HeaderContainer } from "./styles";
import { useTranslator } from "../../contexts";

export function Header() {
  const { t } = useTranslator();

  return (
    <HeaderContainer>
      {t.get("header.language")}: <LanguageToggle />
      {t.get("header.theme")}: <ThemeToggle />
    </HeaderContainer>
  );
}
