import React, { createContext, useContext, useState, ReactNode } from "react";
import { Translator } from "./translator";
import { dictionary } from "./dictionary";
import { Language } from "./translator";

interface TranslatorContextType {
  t: Translator;
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
}

const TranslatorContext = createContext<TranslatorContextType | undefined>(
  undefined
);

export const TranslatorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt-br");
  const [t] = useState(() => new Translator(dictionary, currentLanguage));

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    t.setLanguage(language);
  };

  return (
    <TranslatorContext.Provider value={{ t, currentLanguage, setLanguage }}>
      {children}
    </TranslatorContext.Provider>
  );
};

export const useTranslator = () => {
  const context = useContext(TranslatorContext);
  if (context === undefined) {
    throw new Error("useTranslator must be used within an TranslatorProvider");
  }
  return context;
};
