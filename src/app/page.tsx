"use client";

import { RobotModel, About, Skills, Education, Contacts } from "@/components";

export default function Home() {
  return (
    <main className="my-6 mx-4">
      <RobotModel />
      <div className="relative">
        <div className="absolute -top-40 z-20">
          <About />
          <Education />
          <Skills />
          <Contacts />
        </div>
      </div>
    </main>
  );
}
