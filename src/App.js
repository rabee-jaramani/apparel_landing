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
          "BINIFITS":"BINIFITS",
          "Subscribe with us":"Subscribe with us",
          "Fill up the form below and provide all requested information.":"Fill up the form below and provide all requested information.",

        "Process your request":"Process your request",
        "We will add your email to our databse":"We will add your email to our databse",
        "Receive Newsletters":"Receive Newsletters",
        "Start receiving":"Start receiving the newsletters every day.",
        "Subscribe Form":"Subscribe Form",
        "Contact Us":"Contact Us",
        "Email Address":"Email Address",
"Phone":"Phone",
"Message":"Message",
"Submit":"Submit",
"Name":"Name"
        
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
"BINIFITS":"فوائد",
"Subscribe with us":"اشترك معنا",
"Fill up the form below and provide all requested information.":"املأ النموذج أدناه وقدم جميع المعلومات المطلوبة.",

        "Process your request":"معالجة طلبك",
        "We will add your email to our databse":"سنضيف بريدك الإلكتروني إلى قاعدة البيانات لدينا",
        "Receive Newsletters":"تلقي الرسائل الإخبارية",
        "Start receiving":"ابدأ في تلقي الرسائل الإخبارية كل يوم.",
        "Subscribe Form":"نموذج الاشتراك",
        "Contact Us":"اتصل بنا",
        "Email Address":"عنوان البريد الإلكتروني",
        "Phone":"هاتف",
        "Message":"رسالة",
        "Submit":"ارسال",
        "Name":"الأسم",
        "What We Do":"الذي نفعله",
        "Our Services":"خدماتنا",
        "Registration":"تسجيل",
        "Quick Links":"روابط سريعة",
        "Request A Quote":"اطلب اقتباس",
        "Terms And Conditions":"الأحكام والشروط",
        "Coming Soon On":"قريباً على", 
        "All Rights Reserved 2021":"جميع الحقوق محفوظة 2021",

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
    // backend: {
    //   loadPath: "/assets/locales/{{lng}}/translation.json",
    // },
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
