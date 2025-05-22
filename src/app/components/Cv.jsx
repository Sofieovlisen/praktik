"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { SiAdobe } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandAstro } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript } from "react-icons/di";

import { useLanguage } from "../context/LanguageSwitcher";

const text = {
  da: {
    title: "Erfaring",
    kval: "Kompetencer",
    et: {
      job: "Online Kundeserviceagent | Fuldtid",
      place: "Magasin Backoffice",
      date: "2023 - 2024",
      description:
        "Udover at hjælpe kunderne både telefonisk og på mail, havde jeg til opgave at oplære nye ansatte. Jeg lærte her at holde overblik, selv med mange bolde i luften.",
    },
    to: {
      job: "Piccoline | Deltid",
      place: "BIWise A/S",
      date: "Maj 2023 - juni 2023",
      description:
        "Her arbejdede jeg med diverse opgaver inde på BIWises kontor. Jeg arbejde ikke her i længere tid, da jeg blev tilbudt en anden stilling.",
    },
    tre: {
      job: "Juleassistance | Fuldtid",
      place: "Magasin Backoffice ",
      date: "November 2022 - december 2022",
      description:
        "Her blev jeg ansat til at assistere de fastansatte kundeserviceagenter, men kom hurtigt til at hjælpe med onboarding og oplæring af nye ansatte. Jeg blev senere tilbudt en fastansættelse.",
    },
    fire: {
      job: "Personlig Assistent | Fultid",
      place: "Amerikansk forfatter ",
      date: "August 2022 - september 2022",
      description:
        "Jeg var ansat som PA for en amerikansk forfatter der tilbragte sommeren i Danmark.",
    },
    fem: {
      job: "Webshop- og kundeserviceansvarlig | Fultid",
      place: "Wauw Capow by Bangbang ",
      date: "2021 - 2022",
      description:
        "Jeg havde adskillige opgaver blandt andet kundeservice, redigering, dataføring, logistik og lagerføring mm.",
    },
    seks: {
      job: "Medarbejder | Fuldtid",
      place: "Matas Webshop",
      date: "2020 - 2021",
      description:
        "Jeg arbejdede på lageret, hvor jeg havde til opgave at, plukke og pakke ordrer, lageropfyldning og varehåndtering mm.",
    },

    title2: "Uddannelse",
    ud_et: {
      job: "Multimediedesign med fokus på Frontend-udvikling",
      place: "KEA",
      date: "Januar 2024 - nu",
      description:
        "Læring om design-principper, bæredygtighed indenfor web-udvikling, UX/UI-pricipper, frontend-udvikling, forståelse og implementering af API'er mm.",
    },
    ud_to: {
      job: "Markedsføringsøkonom (ikke fuldført)",
      place: "Cphbusiness",
      date: "August 2021 - juli 2022",
      description:
        "Læring om markedsanalyse, salg og markedsføring, købsadfærd, erhvervsøkonomi, erhvervsret, samt arbejde med cases i samarbejde med adskillige virksomheder.",
    },
    ud_tre: {
      job: "STX",
      place: "N. Zahles Gymnasieskole",
      date: "2017 - 2020",
    },
    ud_fire: {
      job: "Udveksling",
      place: "Willowbrook High School ",
      date: "2016 - 2017",
      description:
        "Jeg var et år på udveksling i Lombard, IL året efter jeg blev færdig med folkeskolen.",
    },
    sofie: {
      title: "Sofie in short",
      title1: "Profil",
      title2: "Personligt",
      profil:
        "Jeg er struktureret og målrettet med stærke evner i at bevare overblikket – også under pres. Derudover er jeg hurtig til at lære nyt og god til både detaljer og helhed. Jeg trives i teams såvel som med selvstændige opgaver og tilpasser mig nemt forskellige roller og situationer. Jeg er social og nysgerrig med flair for samarbejde og vidensdeling.",
      person:
        "Jeg elsker at stå på ski, lave mad og bruge tid med menneskerne omkring mig.",
    },
    linkedin: "Find mig på LinkedIn",
  },
  en: {
    title: "Experience",
    kval: "Skills",
    et: {
      job: "Online Customer Service Agent | Full-time",
      place: "Magasin Backoffice",
      date: "2023 - 2024",
      description:
        "In addition to helping customers via phone and email, I was responsible for training new employees. I learned how to stay organized even when juggling multiple tasks.",
    },
    to: {
      job: "Office Assistant | Part-time",
      place: "BIWise A/S",
      date: "May 2023 - June 2023",
      description:
        "I worked on various administrative tasks at BIWise’s office. I didn’t stay long as I was offered another position.",
    },
    tre: {
      job: "Christmas Temp | Full-time",
      place: "Magasin Backoffice",
      date: "November 2022 - December 2022",
      description:
        "I was hired to assist permanent customer service agents, but soon helped with onboarding and training of new employees. I was later offered a permanent position.",
    },
    fire: {
      job: "Personal Assistant | Full-time",
      place: "American author",
      date: "August 2022 - September 2022",
      description:
        "I worked as a PA for an American author who spent the summer in Denmark.",
    },
    fem: {
      job: "Webshop & Customer Service Manager | Full-time",
      place: "Wauw Capow by Bangbang",
      date: "2021 - 2022",
      description:
        "I handled a variety of tasks including customer service, editing, data entry, logistics, and warehouse management.",
    },
    seks: {
      job: "Warehouse Employee | Full-time",
      place: "Matas Webshop",
      date: "2020 - 2021",
      description:
        "I worked in the warehouse, picking and packing orders, restocking inventory, and handling goods.",
    },
    title2: "Education",
    ud_et: {
      job: "Multimedia Design with a focus on Frontend Development",
      place: "KEA",
      date: "January 2024 - Present",
      description:
        "Learning about design principles, sustainability in web development, UX/UI, frontend development, and working with APIs.",
    },
    ud_to: {
      job: "Marketing Management (not completed)",
      place: "Cphbusiness",
      date: "August 2021 - July 2022",
      description:
        "Studied market analysis, sales and marketing, consumer behavior, business economics, commercial law, and worked on cases with various companies.",
    },
    ud_tre: {
      job: "STX",
      place: "N. Zahles Gymnasium",
      date: "2017 - 2020",
    },
    ud_fire: {
      job: "Exchange Program",
      place: "Willowbrook High School | USA",
      date: "2016 - 2017",
      description:
        "I spent a year in Lombard, IL as an exchange student after finishing primary school.",
    },
    sofie: {
      title: "Sofie in short",
      title1: "Profile",
      title2: "Personal",
      profil:
        "I am structured and goal-oriented, with strong skills in maintaining an overview – even under pressure. I am a fast learner with an eye for both detail and the bigger picture. I thrive in team settings as well as when working independently, and I easily adapt to different roles and situations. I am social and curious, with a talent for collaboration and knowledge sharing.",
      person:
        "I love skiing, cooking, and spending time with the people around me.",
    },
    linkedin: "Find me on LinkedIn",
  },
};

const Cv = () => {
  const { language } = useLanguage();
  return (
    <section className="lg:grid lg:grid-cols-3 lg:gap-5 place-self-center md:w-4/5  text-pretty ">
      <div className="w-fit md:place-self-start place-self-center ">
        <div className="pb-8">
          <Image
            src="/IMG_1398.jpeg"
            alt="Sofie"
            width={200}
            height={300}
            className=" place-self-center shadow-lg mb-4"
          ></Image>
          <div>
            <div className="flex justify-between items-center">
              <MdPhone size={30}></MdPhone>
              <p className="font-semibold">+45 29295729</p>
            </div>
            <Link href={"mailto:sofie@ovlisen.com"}>
              <div className="flex justify-between items-center">
                <IoIosMail size={30}></IoIosMail>
                <p className="font-semibold"> Sofie@ovlisen.com</p>
              </div>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/sofie-asboe-%C3%B8vlisen-09aa1a2b2/"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-between items-center">
                <FaLinkedin size={30}></FaLinkedin>
                <p className="font-semibold">{text[language].linkedin}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 pb-8">
          <h1 className="col-span-3 place-self-center font-bold text-2xl pb-2">
            {text[language].kval}
          </h1>
          <div className="place-self-center">
            <FaHtml5 className="place-self-center" size={40} />
            <p>HTML</p>
          </div>
          <div className="place-self-center">
            <IoLogoCss3 className="place-self-center" size={40} />
            <p>CSS</p>
          </div>
          <div className="place-self-center">
            <DiJavascript className="place-self-center" size={43} />
            <p>JavaScript</p>
          </div>
          <div className="place-self-center">
            <FaReact className="place-self-center" size={40} />
            <p>React</p>
          </div>
          <div className="place-self-center">
            <TbBrandAstro className="place-self-center" size={40} />
            <p>Astro</p>
          </div>
          <div className="place-self-center">
            <RiNextjsFill className="place-self-center" size={40} />
            <p>Next.js</p>
          </div>
          <div className="place-self-center">
            <FaFigma className="place-self-center" size={40} />
            <p>Figma</p>
          </div>
          <div className="place-self-center">
            <SiAdobe className="place-self-center" size={40} />
            <p>Adobe</p>
          </div>
        </div>
      </div>

      <div className="col-span-2 md:min-w-[500px]">
        <div>
          <h2 className="font-bold text-2xl">{text[language].title}</h2>
          <hr />
          <div className="grid grid-cols-2 p-2 gap-5 pl-1.5">
            <div className="w-full break-words">
              <p className="font-bold md:text-[18px]">
                {text[language].et.job}
              </p>
              <h3 className="font-semibold text-gray-700">
                {text[language].et.place}
              </h3>
              <p>{text[language].et.date}</p>
            </div>

            <p>{text[language].et.description}</p>
          </div>
          <div className="grid grid-cols-2 p-2 gap-5 pl-1.5">
            <div className="w-full break-words">
              <p className="font-bold md:text-[18px]">
                {text[language].to.job}
              </p>
              <h3 className="font-semibold text-gray-700">
                {text[language].to.place}
              </h3>
              <p>{text[language].to.date}</p>
            </div>

            <p>{text[language].to.description}</p>
          </div>
          <div className="grid grid-cols-2 p-2 gap-5 pl-1.5">
            <div className="w-full break-words">
              <p className="font-bold md:text-[18px]">
                {text[language].tre.job}
              </p>
              <h3 className="font-semibold text-gray-700">
                {text[language].tre.place}
              </h3>
              <p>{text[language].tre.date}</p>
            </div>

            <p>{text[language].tre.description}</p>
          </div>
          <div className="grid grid-cols-2 p-2 gap-7  pl-1.5">
            <div className="w-full break-words">
              <p className="font-bold  md:text-[18px]">
                {text[language].fire.job}
              </p>
              <h3 className="font-semibold text-gray-700">
                {text[language].fire.place}
              </h3>
              <p>{text[language].fire.date}</p>
            </div>

            <p>{text[language].fire.description}</p>
          </div>
          <div className="grid grid-cols-2 p-2 gap-7  pl-1.5">
            <div className="w-full break-words">
              <p className="font-bold  md:text-[18px]">
                {text[language].fem.job}
              </p>
              <h3 className="font-semibold text-gray-700">
                {text[language].fem.place}
              </h3>
              <p>{text[language].fem.date}</p>
            </div>

            <p>{text[language].fem.description}</p>
          </div>
          <div className="grid grid-cols-2 p-2 gap-7  pl-1.5">
            <div className="w-full break-words">
              <p className="font-bold text-nowrap md:text-[18px]">
                {text[language].seks.job}
              </p>
              <h3 className="font-semibold text-gray-700">
                {text[language].seks.place}
              </h3>
              <p>{text[language].seks.date}</p>
            </div>

            <p>{text[language].seks.description}</p>
          </div>
        </div>

        <div className="col-span-2 pt-10">
          <div>
            <h1 className="font-semibold text-2xl">{text[language].title2}</h1>
            <hr />
            <div className="grid grid-cols-2 p-2 gap-7  pl-1.5">
              <div className="w-full break-words">
                <h3 className="text-pretty  font-bold md:text-[18px]">
                  {text[language].ud_et.job}
                </h3>
                <p className="font-semibold text-gray-700">
                  {text[language].ud_et.place}
                </p>
                <p>{text[language].ud_et.date}</p>
              </div>

              <p>{text[language].ud_et.description}</p>
            </div>

            <div className="grid grid-cols-2 p-2 gap-7  pl-1.5">
              <div className="w-full min-w-5 ">
                <h3 className=" break-words font-bold  md:text-[18px]">
                  {text[language].ud_to.job}
                </h3>
                <p className="font-semibold text-gray-700">
                  {text[language].ud_to.place}
                </p>
                <p>{text[language].ud_to.date}</p>
              </div>

              <p>{text[language].ud_to.description}</p>
            </div>
            <div className=" p-2  pl-1.5 w-fit">
              <h3 className="text-pretty font-bold  md:text-[18px]">
                {text[language].ud_tre.job}
              </h3>
              <p className="font-semibold text-gray-700">
                {text[language].ud_tre.place}
              </p>
              <p>{text[language].ud_tre.date}</p>
            </div>

            <div className="grid grid-cols-2 p-2 gap-7  pl-1.5">
              <div className="w-full break-words">
                <h3 className="text-pretty font-bold md:text-[18px]">
                  {text[language].ud_fire.job}
                </h3>
                <p className="font-semibold text-gray-700">
                  {text[language].ud_fire.place}
                </p>
                <p>{text[language].ud_fire.date}</p>
              </div>
              <div>
                <p>{text[language].ud_fire.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full m-8 ">
        <h1 className=" text-2xl font-bold ">{text[language].sofie.title}</h1>
        <hr />
        <div>
          <h2 className="font-bold md:text-[18px] pt-6">
            {text[language].sofie.title1}
          </h2>
          <p>{text[language].sofie.profil}</p>
          <h2 className="font-bold md:text-[18px] pt-6">
            {text[language].sofie.title2}
          </h2>
          <p>{text[language].sofie.person}</p>
        </div>
      </div>
    </section>
  );
};

export default Cv;
