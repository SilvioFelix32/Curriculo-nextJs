import React from "react";
import { useLanguage } from "../../contexts/Language";
import { LanguageToggleButton } from "./styles";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <LanguageToggleButton onClick={toggleLanguage}>
      {language === "pt-BR" ? "🇧🇷" : "🇺🇸"}
    </LanguageToggleButton>
  );
}
