import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Translator } from "./translator";
import { dictionary } from "./dictionary";
import { Language } from "./translator";
import Cookies from "js-cookie";

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
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = Cookies.get("language-preference");
    return (savedLanguage as Language) || "pt-br";
  });
  const [t] = useState(() => new Translator(dictionary, currentLanguage));

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    t.setLanguage(language);
    Cookies.set("language-preference", language, {
      expires: 365,
      path: "/",
    });
  };

  useEffect(() => {
    const savedLanguage = Cookies.get("language-preference");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage as Language);
      t.setLanguage(savedLanguage as Language);
    }
  }, []);

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
