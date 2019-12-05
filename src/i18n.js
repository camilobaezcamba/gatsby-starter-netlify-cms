import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
const resources = {
  en: {
    translation: {
      "title": "Gatsby English",
      "conductor": "Driver",
      "enterate": "Find out more",
      "sumate": "Join the staff",
      "contacto": "Contact",
      "corporativo": "Corporate",
      "ayuda": "Help",
      "beneficios": "Benefits",
      "terminos": "Terms and conditions",
      "politicas": "Policies",
      "español": "Spanish"
    }
  },
  es: {
    translation: {
      "title": "Gatsby Español",
      "conductor": "Conductor",
      "enterate": "Entérate más",
      "sumate": "Sumate al staff",
      "contacto": "Contacto",
      "corporativo": "Corporativo",
      "ayuda": "Ayuda",
      "beneficios": "Beneficios",
      "terminos": "Términos y condiciones",
      "politicas": "Políticas",
      "español": "Español"
    }
  }
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });


export default i18n;