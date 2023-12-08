import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const languages = [
    { language: "العربية", short: "ar" },
    { language: "English", short: "en" },
    { language: "Français", short: "fr" },
  ];

  return (
    <div>
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        {languages.map(({ language, short }) => (
          <option key={short} value={short}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
