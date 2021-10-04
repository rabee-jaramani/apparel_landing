// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import HttpApi from "i18next-http-backend";
// import i18next from "i18next";

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     resources: {
//       en: {
//         translation: {
//           "Welcome to React": "Welcome to React and react-i18next",
//         },
//       },
//       fr: {
//         translation: {
//           "Welcome to React": "Welcome to React in French",
//         },
//       },
//     },
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     fallbackLng: "en",
//     detection: {
//       order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
//       caches: ["cookie"],
//     },
//     backend: {
//       loadPath: "/assets/locales/{{lng}}/translation.json",
//     },
//     react: { useSuspense: false },
//   });
// i18next.changeLanguage("en");
// function Test() {
//   const { t } = useTranslation();

//   return <h2>{t(`Welcome to React`)}</h2>;
// }
// export default Test;
