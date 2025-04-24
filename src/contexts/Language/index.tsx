import React, { createContext, useContext, useState } from "react";

type Language = "pt-BR" | "en-US";

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  "pt-BR": {
    theme: "Tema",
    language: "Idioma",
    about: "Sobre",
    name: "Nome",
    age: "Idade",
    city: "Cidade",
    state: "Estado",
    phone: "Telefone",
    email: "Email",
    download: "Baixar PDF",
    experience: "Experiência",
    skills: "Habilidades",
  },
  "en-US": {
    theme: "Theme",
    language: "Language",
    about: "About",
    name: "Name",
    age: "Age",
    city: "City",
    state: "State",
    phone: "Phone",
    email: "Email",
    download: "Download PDF",
    experience: "Experience",
    skills: "Skills",
  },
};

const LanguageContext = createContext<LanguageContextData>(
  {} as LanguageContextData
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pt-BR");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt-BR" ? "en-US" : "pt-BR"));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
