"use client";

import { useLanguage } from "../context/LanguageSwitcher";

const Hero = () => {
  const { language } = useLanguage();

  const text = {
    da: {
      title: "Multimediedesignstuderende",
      subtitle: "Med fokus på Frontend-udvikling og æstetik",
      name: "Sofie Asboe Øvlisen",
      praktik: "Praktik | 25. august - 31. oktober",
    },
    en: {
      title: "Multimedia design student",
      subtitle: "With focus on frontend-development and aestethics",
      name: "Sofie Asboe Oevlisen",
      praktik: "Internship | August 25th - October 31st",
    },
  };

  return (
    <section className="h-screen md:p-12 p-6">
      <div className="mb-2 sm:mb-5">
        <h1 className="lg:text-8xl text-3xl font-semibold  break-words max-w-full mb-5">
          {text[language].title}
        </h1>
        <h1 className="text-3xl md:text-6xl place-self-end  leading-tight  mb-10">
          {text[language].subtitle}
        </h1>
        <div className="absolute bottom-1/5 right-6  ">
          <h3 className=" text-2xl font-semibold md:text-7xl mt-4">
            {text[language].name}
          </h3>
          <h2 className="text-3xl place-self-center">
            {text[language].praktik}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
