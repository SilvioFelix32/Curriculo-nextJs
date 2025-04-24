import React from "react";
import { LanguageToggle } from "../LanguageToggle";
import { ThemeToggle } from "../ChangeTheme";
import { HeaderContainer } from "./styles";
import { useLanguage } from "../../contexts";

export function Header() {
  const { t } = useLanguage();

  return (
    <HeaderContainer>
      <div>
        {t("theme")}: <ThemeToggle />
      </div>
      <div>
        {t("language")}: <LanguageToggle />
      </div>
    </HeaderContainer>
  );
}
