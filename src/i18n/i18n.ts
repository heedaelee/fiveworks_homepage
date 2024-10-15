import {resources} from './resource';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    debug: true,
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
