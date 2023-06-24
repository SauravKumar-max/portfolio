import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Contacts() {
  return (
    <section className="dark:text-white mt-8">
      <h3 className="font-bold text-lg">Contacts</h3>
      <div className="flex items-center justify-around gap-2 mt-2">
        <a href="https://github.com/SauravKumar-max" target="_blank">
          <BsGithub className="text-cyan-600 dark:text-cyan-500 text-2xl" />
        </a>

        <a href="linkedin.com/in/saurav-kumar-b7181b196" target="_blank">
          <FaLinkedin className="text-cyan-600 dark:text-cyan-500 text-2xl" />
        </a>

        <a href="mailto:maxsaurav237@gmail.com" target="_blank">
          <SiGmail className="text-cyan-600 dark:text-cyan-500 text-2xl" />
        </a>
      </div>
    </section>
  );
}
