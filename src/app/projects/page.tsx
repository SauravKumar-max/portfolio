import Image from "next/image";
import Link from "next/link";
import { projectList } from "@/constants/projectList";

export default function Projects() {
  return (
    <main className="dark:text-white my-6 mx-4">
      <h3 className="font-bold text-lg">Projects</h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {projectList.map(({ id, name, image, description }) => (
          <div key={id}>
            <Link href={`/projects/${id}`}>
              <div className="bg-white dark:bg-slate-700 rounded-md shadow-md">
                <div className="relative overflow-hidden w-full h-36 rounded-t-md border dark:border-slate-700 border-gray-300">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover bg-gray-300 dark:bg-slate-500"
                  />
                </div>
                <div className="pt-2 px-4 pb-4">
                  <h4 className="text-lg font-bold">{name}</h4>
                  <p className="font-mono mt-0.5 text-gray-600 dark:text-gray-300">
                    {description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
