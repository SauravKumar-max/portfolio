import React from "react";
import Image from "next/image";
import { skillsLists } from "@/constants/skillsList";

export function Skills() {
  return (
    <section className="dark:text-white mt-8">
      <h3 className="font-bold text-lg">Skills</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-2">
        {skillsLists.map((item) => (
          <div
            key={item.id}
            className="w-auto h-auto flex flex-col gap-2 items-center justify-between p-2 rounded shadow bg-white dark:bg-slate-700"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={item.width}
              height={item.height}
            />
            <p className="font-semibold whitespace-nowrap">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
