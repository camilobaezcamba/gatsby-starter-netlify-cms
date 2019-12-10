import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from "i18next-xhr-backend";

i18n
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    lng: "es",
    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;