"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { SiAdobe } from "react-icons/si";

const Cv = () => {
  return (
    <section className="grid grid-cols-3 w-4/5 ">
      <div className="w-fit place-self-start">
        <Image></Image>
        <div>
          <MdPhone></MdPhone>
          <IoIosMail></IoIosMail>
          <FaLinkedin />
        </div>
        <div>Kompetence icons</div>
      </div>

      <div className="col-span-2">
        <div>
          <h2>Erfaring</h2>
          <hr />
          <div className="grid grid-cols-2  items-center pl-1.5">
            <h3>
              Sted <br /> år - år
            </h3>
            <p>Beskrivelse af stedet</p>
          </div>
          <div className="grid grid-cols-2  items-center pl-1.5">
            <h3>
              Sted <br /> år - år
            </h3>
            <p>Beskrivelse af stedet</p>
          </div>
          <div className="grid grid-cols-2  items-center pl-1.5">
            <h3>
              Sted <br /> år - år
            </h3>
            <p>Beskrivelse af stedet</p>
          </div>
          <div className="grid grid-cols-2  items-center pl-1.5">
            <h3>
              Sted <br /> år - år
            </h3>
            <p>Beskrivelse af stedet</p>
          </div>
        </div>

        <div className="col-span-2 pt-10">
          <div>
            <h1>Uddannelse</h1>
            <hr />
            <div className="grid grid-cols-2  items-center pl-1.5">
              <h3>
                Sted <br /> År - år
              </h3>
              <p>Beskrivelse</p>
            </div>
            <div className="grid grid-cols-2  items-center pl-1.5">
              <h3>
                Sted <br /> År - år
              </h3>
              <p>Beskrivelse</p>
            </div>
            <div className="grid grid-cols-2  items-center pl-1.5">
              <h3>
                Sted <br /> År - år
              </h3>
              <p>Beskrivelse</p>
            </div>
            <div className="grid grid-cols-2  items-center pl-1.5">
              <h3>
                Sted <br /> År - år
              </h3>
              <p>Beskrivelse</p>
            </div>
            <div className="grid grid-cols-2  items-center pl-1.5">
              <h3>
                Sted <br /> År - år
              </h3>
              <p>Beskrivelse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cv;
