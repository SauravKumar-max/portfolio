"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  neogSkillsLearned,
  taxaddaWorkedStack,
} from "@/constants/experienceStack";

export default function Experience() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main className="dark:text-white my-6 mx-4">
      <h3 className="font-bold text-lg">Experience</h3>
      {/* TAXADDA */}
      <section className="flex items-start gap-4 mt-2">
        <div className="pl-1 pr-0.5 flex items-center justify-center mt-2 bg-white border dark:border-none border-gray-400">
          <Image
            src={"/assets/taxAdda.png"}
            alt="taxadda"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h4 className="font-medium">Frontend Engineer Intern</h4>
          <a
            href="https://taxadda.com/"
            className="text-cyan-600 dark:text-cyan-500 hover:underline"
          >
            TaxAdda
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Jul 2022 to Jan 2023
          </p>
          <div className="mt-2">
            <p className="font-mono">
              Worked on Practice Management Software (
              <a
                href="https://pms.taxadda.com/"
                className="text-cyan-600 dark:text-cyan-500 hover:underline"
                target="_blank"
              >
                PMS
              </a>
              ) for CA and Tax Practitioners, this project was aimed at giving a
              SaaS platform for Tax Practitioners to manage their practice
              effectively and effortlessly.
            </p>
          </div>
          <div className="mt-2">
            <ul className="flex flex-row flex-wrap gap-2">
              {taxaddaWorkedStack.map((item: string) => (
                <li
                  key={`taxadda-${item}`}
                  className="grow-0 shrink basis-[0%] whitespace-nowrap px-2 py-1 bg-cyan-600 rounded-2xl text-xs text-center font-semibold text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="list-disc list-outside font-mono flex flex-col flex-1 gap-3 ml-4">
              <li>
                Worked as the primary frontend engineer on their SAAS-based
                application.
              </li>
              <li>
                Developed a wide range of user interfaces and pages for the
                application.
              </li>
              {showMore && (
                <>
                  <li>
                    Implemented API integration in the frontend for complete
                    CRUD operations.
                  </li>
                  <li>
                    Single-handedly accomplished the development and
                    implementation of core features/modules (Task, User and
                    Client Management) of the application.
                  </li>
                  <li>
                    Resolved frontend bugs and effectively communicated
                    API-related issues to the backend team for timely
                    resolution.
                  </li>
                  <li>
                    Collaborated with another intern to successfully complete
                    the application within 7 months. The application is now live
                    and being utilized by users.
                  </li>
                </>
              )}
            </ul>
            <div className="flex justify-end">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-sm text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                {showMore ? "... Show Less" : "... Show More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEOGCAMP */}

      <section className="flex items-start gap-4 mt-12">
        <div className="mt-1 flex items-center justify-center bg-white border dark:border-none border-gray-400">
          <Image
            src={"/assets/neog.jpeg"}
            alt="neogcamp"
            width={160}
            height={140}
          />
        </div>
        <div>
          <h4 className="font-medium">Student</h4>
          <a
            href="https://neog.camp/"
            className="text-cyan-600 dark:text-cyan-500 hover:underline"
            target="_blank"
          >
            neoG Camp
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Feb 2021 to Jul 2021
          </p>
          <div className="mt-2">
            <p className="font-mono">
              NeoG Camp is web development bootcamp where I acquired proficiency
              in web development and mastered the art of creating full-stack
              applications using the MERN stack and created 5 full-stack
              application from scratch. Feel free to explore some of the
              full-stack applications in the{" "}
              <Link
                href="/projects"
                className="text-cyan-600 dark:text-cyan-500 hover:underline"
              >
                projects
              </Link>{" "}
              section.
            </p>
          </div>
          <div className="mt-4">
            <ul className="flex flex-row flex-wrap gap-2">
              {neogSkillsLearned.map((item: string) => (
                <li
                  key={`neog-${item}`}
                  className="grow-0 shrink basis-[0%] whitespace-nowrap px-2 py-1 bg-cyan-600 rounded-2xl text-xs text-center font-semibold text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
