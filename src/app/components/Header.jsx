"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageSwitcher";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="flex justify-between p-6">
      <button
        onClick={toggleLanguage}
        className="ml-4 px-4 py-2 border border-black rounded-md hover:bg-gray-200 transition text-sm cursor-pointer"
      >
        {language === "da" ? "EN" : "DA"}
      </button>
      <div className="flex gap-2">
        <Link
          href={"https://github.com/Sofieovlisen"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40}></FaGithub>
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/sofie-asboe-%C3%B8vlisen-09aa1a2b2/"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40}></FaLinkedin>
        </Link>
      </div>
    </header>
  );
};

export default Header;
