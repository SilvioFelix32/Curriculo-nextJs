import React from "react";
import { useTranslator } from "@/contexts/Translation";
import { Language } from "@/contexts/Translation/translator";
import { LanguageToggleButton } from "./styles";

export const LanguageToggle: React.FC = () => {
  const { currentLanguage, setLanguage } = useTranslator();

  const toggleLanguage = () => {
    const newLanguage: Language =
      currentLanguage === "pt-br" ? "en-us" : "pt-br";
    setLanguage(newLanguage);
  };

  return (
    <LanguageToggleButton onClick={toggleLanguage}>
      {currentLanguage === "pt-br" ? "🇧🇷" : "🇺🇸"}
    </LanguageToggleButton>
  );
};
