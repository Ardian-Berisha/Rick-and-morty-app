import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    status: "Status",
    species: "Species",
    alive: "Alive",
    dead: "Dead",
    unknown: "Unknown",
    previous: "Previous",
    next: "Next",
    languageSwitcher: "Switch Language",
    english: "English",
    german: "German",
    footerText: "© 2025 Rick and Morty App. All Rights Reserved To Me.",
  },
  de: {
    status: "Status",
    species: "Spezie",
    alive: "Lebendig",
    dead: "Tot",
    unknown: "Unbekannt",
    previous: "Zurück",
    next: "Weiter",
    languageSwitcher: "Sprache wechseln",
    english: "Englisch",
    german: "Deutsch",
    footerText: "© 2025 Rick and Morty App. Alle Rechte vorbehalten.",
  }
};

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
