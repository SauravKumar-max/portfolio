import Image from "next/image";
import React from "react";

export function About() {
  return (
    <section className="dark:text-white">
      <div className="text-base sm:text-lg text-center py-2 bg-[#918d8d5c] dark:bg-[#ffffff14] rounded-sm">
        Hello, I&apos;m a full stack developer based in India!
      </div>
      <div className="flex justify-between mt-6 gap-2">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold">Saurav Kumar</h1>
          <h2 className="flex items-start gap-1 text-xs sm:text-base font-mono">
            <span>Frontend Developer </span>
            <span>/</span>
            <span>Full Stack Developer</span>
          </h2>
        </div>
        <div className="relative w-16 h-16 sm:w-[5.5rem] sm:h-[5.5rem]">
          <Image
            src={"/assets/profile.jpg"}
            alt="profile"
            className="rounded-full border-2 border-white"
            fill={true}
            sizes={"max-width: 5.5rem"}
            quality={75}
          />
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-bold text-lg">About Saurav</h3>
        <div className="font-mono mt-2">
          <p>
            Saurav is a full-stack developer from India. He has a genuine
            passion for creating applications and staying updated with the
            latest technologies. While he finds frontend development more
            enjoyable and leans towards it, he is also intrigued by backend
            technologies.
          </p>
          <br />
          <p>
            He is genuinely fascinated by how technology has the power to
            enhance people&apos;s lives and make a meaningful impact and Saurav
            aspire to be a part of that positive transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
