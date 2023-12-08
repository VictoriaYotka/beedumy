import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";

import LanguageDetector from "i18next-browser-languagedetector";

i18n

  // if you want your translations to be loaded from a professional CDN

  .use(Backend)

  // to detect user language

  .use(LanguageDetector)

  // to pass the i18n instance to react-i18next.

  .use(initReactI18next)

  // init i18next

  .init({
    fallbackLng: "ar",

    defaultNS: "common",

    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
      // D:\projects\birsaplatform\src\locales\ar\translation.json
    },

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
