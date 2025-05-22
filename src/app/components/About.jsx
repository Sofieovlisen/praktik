"use client";
import Cv from "./Cv";

import { useLanguage } from "../context/LanguageSwitcher";

const text = {
  da: {
    title: "1. Om mig",
    content: `Jeg hedder Sofie, jeg er 24 år gammel og bor i indre København.
            Min vej til Multimediedesign på KEA startede da jeg efter et
            år på Markedsføringsøkonomuddannelsen på Cphbusiness indså, at jeg
            havde brug for noget mere kreativt i min hverdag. 
            Jeg har altid været kreativ og haft en stor interesse for design,
            grafik, fotografi, kunst og meget mere. Oprindeligt troede jeg, at
            det skulle forblive en hobby, men det blev hurtigt klart for mig, at
            jeg savnede kreativ udfoldelse. Derfor valgte jeg at stoppe på min
            tidligere uddannelse og finde en retning, hvor kreativiteten kunne
            få mere plads. 
            Jeg begyndte på KEA med en idé om, at jeg skulle fokusere på design
            og blot “overleve” kodningsdelen – men det viste sig hurtigt, at jeg
            også blev grebet af det tekniske. Det at kunne kode det, jeg selv
            eller andre har designet, føles for mig som at tegne eller male –
            bare med kode. Derfor valgte jeg frontend-udvikling som mit valgfag
            på tredje semester, hvor jeg har lært et væld af nye ting. 
            Nu glæder jeg mig til at lære endnu mere under min praktik og til at
            få indblik i branchen udenfor skolebænken.`,
  },
  en: {
    title: "1. About me",

    content: `My name is Sofie, I’m 24 years old and I live in central Copenhagen.
My journey to Multimedia Design at KEA began after spending a year studying Marketing Management at CPH Business, where I realized I needed something more creative in my everyday life.

I’ve always been creative and had a strong interest in design, graphics, photography, art, and much more. Initially, I thought it would just remain a hobby, but it quickly became clear to me that I missed having a creative outlet. That’s why I decided to leave my previous studies and find a direction where creativity could play a bigger role.

I started at KEA with the idea that I would focus on design and just “get through” the coding part – but I quickly found myself drawn to the technical side as well. Being able to code something I or others have designed feels to me like drawing or painting – just with code. That’s why I chose frontend development as my elective in the third semester, where I’ve learned a wealth of new things.

Now I’m looking forward to learning even more during my internship and to getting insights into the industry beyond the classroom.`,
  },
};

const About = () => {
  const { language } = useLanguage();
  return (
    <section>
      <div className="md:grid md:grid-cols-3">
        <div className="h-[50vh] md:h-dvh ">
          <h1 className="sticky top-0 md:text-8xl text-6xl ">
            {text[language].title}
          </h1>
        </div>
        <div className=" md:h-1/2  h-full m-1/3 md:place-self-end col-span-2 max-w-4xl ">
          <p className="pt-1.5 pr-8 text-[18px] break-words">
            {text[language].content}
          </p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-[auto, 1fr, 1fr] h-fit">
        <div className="md:h-full h-[50vh] w-fit ">
          <h1 className=" md:text-8xl text-6xl sticky top-2 ">2. CV</h1>
        </div>
        <div className="col-start-2  h-1/2 md:mt-56 ">
          <Cv></Cv>
        </div>
        <div className="h-[50vh]"></div>
      </div>
    </section>
  );
};

export default About;
