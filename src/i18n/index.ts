import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ar from "./locales/ar.json";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  ar: { translation: ar },
};

// Try to read saved language
const savedLng = localStorage.getItem("i18nextLng") || "fr";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLng,
  fallbackLng: "fr",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

// When user changes language, persist it
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;
