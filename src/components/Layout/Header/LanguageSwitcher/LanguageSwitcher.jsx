import React, { useEffect, useState } from "react";
import css from "./LanguageSwitcher.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";

const languages = [
  { language: "العربية", short: "ar" },
  { language: "English", short: "en" },
  { language: "Français", short: "fr" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [isOpened, setIsOpened] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(
    languages.find((lang) => lang.short === i18n.language) ||
      languages[0].language
  );

  const handlerClicks = (e) => {
    const backdrop =
      e.target.closest("#language_switcher") === null && e.type === "click";
    const target = e.key === "Escape";

    if (backdrop || target) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handlerClicks);
    window.addEventListener("keydown", handlerClicks);

    return () => {
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  });

  useEffect(() => {
    const dir = i18n.dir(currentLanguage.short);
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n, currentLanguage]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.short);
    setCurrentLanguage(lang);
    setIsOpened(false);
  };

  const languageList = languages.filter(
    (lang) => lang.short !== currentLanguage.short
  );
  return (
    <div className={css.wrapper} id="language_switcher">
      <button onClick={() => setIsOpened(!isOpened)} className={css.button}>
        <p onClick={() => changeLanguage(currentLanguage)}>
          {currentLanguage.language}
        </p>
        <svg className={css.icon}>
          <use href={`${icons}#chevron-down`}></use>
        </svg>
      </button>

      <ul className={`${css.list} ${isOpened ? css.dropdown : ""}`}>
        {languageList.map((lang) => (
          <li
            className={css.item}
            key={lang.short}
            onClick={() => changeLanguage(lang)}
          >
            {lang.language}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
