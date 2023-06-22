import { blogList } from "@/constants/blogList";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";

export default function Blogs() {
  return (
    <main className="dark:text-white my-6 mx-4">
      <h3 className="font-bold text-lg">Blogs</h3>
      <section className="my-4 flex flex-col gap-8">
        {blogList.map(({ title, text, image, link }) => (
          <div
            key={title}
            className="bg-white dark:bg-slate-700 rounded-xl shadow-md"
          >
            <div className="relative overflow-hidden w-full h-36 rounded-t-xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover bg-gray-300 dark:bg-slate-500"
              />
            </div>
            <div className="pt-2 px-4 pb-4">
              <h4 className="text-lg font-bold">{title}</h4>
              <p className="font-mono font-semibold my-2 text-gray-600 dark:text-gray-300">
                {text}
              </p>
              <a
                href={link}
                className="flex items-center gap-0.5 text-cyan-600 dark:text-cyan-500 w-fit hover:underline"
                target="_blank"
              >
                <span>Read</span>
                <BiLinkExternal className="stroke-1" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
