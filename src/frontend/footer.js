import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { changeLanguage, translations } = useLanguage(); // Access translations

  return (
    <footer className="text-center p-4 bg-primary text-white">
      <p>{translations.footerText}</p>
      <div className="mt-3">
        <button
          className="btn btn-light mx-2"
          onClick={() => changeLanguage('en')}
        >
          {translations.english}
        </button>
        <button
          className="btn btn-light mx-2"
          onClick={() => changeLanguage('de')}
        >
          {translations.german}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
