import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources:{
      en: {
        translation: {
          'hello': 'Welcome to React'
        }
      }, 
      es: {
        translation: {
          'hello': 'Bienvenido a React'
        }
      }
    },
    lng: "es",
    fallbackLng: "es",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;