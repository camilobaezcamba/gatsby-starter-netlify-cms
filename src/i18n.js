import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./locales/en"
import es from "./locales/es"

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
}
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
    fallbackLng: "es",
    initImmediate: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;