"use client";

import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { SiAdobe } from "react-icons/si";

const Cv = () => {
  return (
    <div>
      <h1>CV</h1>
      <div className="flex">
        <div>
          <h2>Kontakt</h2>
          <IoIosMail />
          <FaLinkedin />
          <MdPhone />
          <h2>Kompetencer</h2>
          <SiAdobe />
        </div>
        <div>
          <h2>Uddannelse</h2>
          <h2>Erhverv</h2>
        </div>
      </div>
    </div>
  );
};

export default Cv;
