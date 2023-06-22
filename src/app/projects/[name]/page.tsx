"use client";

import React, { useState } from "react";
import { projectList } from "@/constants/projectList";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import Image from "next/image";
import { ImageSlider } from "@/components";

type ProjectDetailType = {
  params: { name: string };
};

export default function ProjectDetail({ params }: ProjectDetailType) {
  const [showMore, setShowMore] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);
  const project = projectList.find((item) => item.id === params.name);
  const features = project
    ? showMore
      ? project.features
      : project.features.slice(0, 2)
    : [];

  function onGalleryClick() {
    setOpenSlider(true);
  }

  return (
    <main className="dark:text-white my-6 mx-4">
      {project === undefined ? (
        <p className="text-center text-2xl font-bold text-gray-600 dark:text-gray-300">
          Project Not Avialable!
        </p>
      ) : (
        <>
          {openSlider && (
            <ImageSlider
              imageList={project.gallery}
              onSliderClose={setOpenSlider}
            />
          )}
          <h3 className="font-bold text-xl">{project.name}</h3>
          <section className="my-3">
            <p className="font-mono">{project.longDescription}</p>
            <div className="mt-4">
              <ul className="flex flex-row flex-wrap gap-2">
                {project.stack.map((item: string) => (
                  <li
                    key={`neog-${item}`}
                    className="grow-0 shrink basis-[0%] whitespace-nowrap px-2 py-1 bg-cyan-600 rounded-2xl text-xs text-center font-semibold text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <h5 className="text-lg font-bold">Links</h5>
              <div className="mt-1 flex items-center gap-6">
                <a
                  href={project.hostedLink}
                  className="flex items-center gap-1 text-cyan-600 dark:text-cyan-500 font-semibold hover:underline"
                  target="_blank"
                >
                  <span>Live Demo</span>
                  <BiLinkExternal className="stroke-1" />
                </a>
                <a
                  href={project.githubLink}
                  className="flex items-center gap-1 text-cyan-600 dark:text-cyan-500 w-fit font-semibold hover:underline"
                  target="_blank"
                >
                  <span>Github Repo</span>
                  <BiLinkExternal className="stroke-1" />
                </a>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="text-lg font-bold">Features</h5>
              <div className="mt-2">
                <ul className="list-disc list-outside font-mono flex flex-col flex-1 gap-3 ml-4">
                  {features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
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
            <div className="mt-2">
              <h5 className="text-lg font-bold">Gallery</h5>
              <div className="relative group">
                <div
                  className="invisible group-hover:visible cursor-pointer flex flex-col items-center justify-center absolute top-0 left-0 rounded-lg w-full h-full z-10 bg-gray-300 bg-opacity-60"
                  onClick={onGalleryClick}
                >
                  <AiFillEye className="text-6xl fill-gray-700" />
                  <span className="text-2xl font-bold text-gray-700 -mt-3">
                    See All
                  </span>
                </div>
                <div className="mt-2 mx-auto grid grid-cols-2 rounded-lg overflow-hidden">
                  {project.gallery.slice(0, 4).map((image) => (
                    <div
                      key={image}
                      className="relative overflow-hidden w-full h-36 border dark:border-slate-700 border-gray-300"
                    >
                      <Image
                        src={image}
                        alt={"gallery"}
                        fill
                        className="object-cover bg-gray-300 dark:bg-slate-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
