import Home from "./Home";
import "./style.sass";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources: {
      en: {
        translation: {
          "about us": "About Us",
          "how to join btn": "how to join",
          "Zero %": "Zero %",
          "Commission": "Commission",
          "You will receive best service with":
            "You will receive best service with",
          "Soon": "Soon",
          "Subscribe": "Subscribe",
          "p1":"by joining Soon you will receive the latest updates on our Community Resource Guides, find out what is happening in our Boston and New Bedford offices, and learn about upcoming events and happenings throughout the Greater Boston, South Shore, and South Coast areas. You'll also be the first to know about the world!",
          "Contact us btn":"Contact us",
          "Three Steps To Subscribe":"Three Steps To Subscribe",
          "Below are the three easy steps for receiving the newsletters":"Below are the three easy steps for receiving the newsletters",
          "BINIFITS":"BINIFITS"
        
        },
      },
      sa: {
        translation: {
          "about us": "نبذة عنا",
          "how to join btn": "كيف تنضم",
          "Zero %": "صفر٪",
          "Commission": "عمولة",
          "You will receive best service with": "سوف تتلقى أفضل خدمة مع",
          "Soon": "سون",
          "Subscribe": "اشتراك",
          "p1":"من خلال الانضمام قريبًا ، ستتلقى آخر التحديثات على أدلة موارد المجتمع لدينا ، وتعرف على ما يحدث في مكاتبنا في بوسطن ونيو بيدفورد ، وتتعرف على الأحداث والأحداث القادمة في جميع أنحاء بوسطن الكبرى وساوث شور وساحل المناطق. ستكون أيضًا أول من يعرف عن العالم!",
        "Contact us btn":"اتصل بنا",
        "Three Steps To Subscribe":"ثلاث خطوات للاشتراك",
        "Below are the three easy steps for receiving the newsletters":"فيما يلي ثلاث خطوات سهلة لتلقي الرسائل الإخبارية",
"BINIFITS":"فوائد"
        },
      },
    },
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
