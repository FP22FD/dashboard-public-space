import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import the language detector
import enTranslation from './en.json';
import noTranslation from './no.json';

i18n
    .use(LanguageDetector) // Use the language detector
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources: {
            en: { translation: enTranslation },
            no: { translation: noTranslation },
        },
        fallbackLng: 'en', // Fallback language if none is selected
        interpolation: {
            escapeValue: false, // React already safes from xss
        },
        detection: {
            // Specify where to look for language info (localStorage, cookies, etc.)
            order: ['localStorage', 'cookie', 'querystring', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;
