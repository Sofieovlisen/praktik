"use client";

import { useLanguage } from "../context/LanguageSwitcher";

const Hero = () => {
  const { language } = useLanguage();

  const text = {
    da: {
      title: "Multimediedesignstuderende",
      subtitle: "Valgfag: Frontend",
      name: "Sofie Asboe Øvlisen",
    },
    en: {
      title: "Multimediadesign student",
      subtitle: "Elective: Frontend",
      name: "Sofie Asboe Oevlisen",
    },
  };

  return (
    <section className="h-screen p-6">
      <div className="mb-2 sm:mb-5">
        <h1 className="text-8xl  font-bold break-words max-w-full mb-5">
          {text[language].title}
        </h1>
        <h1 className="text-3xl md:text-7xl font-bold leading-tight  mb-10">
          {text[language].subtitle}
        </h1>
        <h3 className="absolute bottom-1/5 right-6 text-2xl font-bold md:text-7xl mt-4">
          {text[language].name}
        </h3>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-6xl ">
          ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;
