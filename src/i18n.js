// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hi, I am Ilias",
      profession: "Web Developer",
      description:
        "I'm passionate about building intuitive, user-friendly tools that make life easier. From simple generators to fully interactive applications.",
      follow: "Follow",
    },
  },
  ru: {
    translation: {
      greeting: "Привет, я Ильяс",
      profession: "Веб-разработчик",
      description:
        "Мне нравится создавать интуитивные, удобные инструменты, которые упрощают жизнь. От простых генераторов до полностью интерактивных приложений.",
      follow: "Подписаться",
    },
  },
  kg: {
    translation: {
      greeting: "Салам, мен Ильяс",
      profession: "Веб-разработчы",
      description:
        "Мен интуитивдүү, колдонуучуга ыңгайлуу куралдарды түзүүгө кызыгам. Жөнөкөй генераторлордон толук интерактивдүү колдонмолорго чейин.",
      follow: "Катталуу",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Язык по умолчанию
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
