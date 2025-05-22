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
    <section className="min-h-dvh h-fit md:p-12 p-2 flex flex-col justify-around ">
      <div className=" sm:mb-5">
        <h1 className="lg:text-8xl md:text-5xl text-3xl font-semibold  break-words max-w-full mb-5">
          {text[language].title}
        </h1>
        <h1 className="text-2xl  lg:text-6xl place-self-end   ">
          {text[language].subtitle}
        </h1>
      </div>
      <div className=" self-end mb-9">
        <h3 className=" text-3xl font-semibold lg:text-7xl ">
          {text[language].name}
        </h3>
        <h2 className="lg:text-3xl text-2xl place-self-center">
          {text[language].praktik}
        </h2>
      </div>
    </section>
  );
};

export default Hero;
