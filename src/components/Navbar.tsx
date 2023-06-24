"use client";

import React, { useEffect, useState } from "react";
import { firstApiRequestOfProjects } from "@/utils/fetchAPIs";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import ThemeBtn from "./ThemeBtn";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  function onMenuOpen() {
    setOpenMenu(!openMenu);
  }

  useEffect(() => {
    firstApiRequestOfProjects();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-40 w-full backdrop-blur-sm">
      {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}
      <div className="max-w-3xl mx-auto flex items-center justify-between dark:text-white p-4">
        <div className="flex items-baseline gap-10">
          <div>
            <div className="text-2xl font-bold">
              <Link href={"/"}>Saurav Kumar</Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <ul className="flex items-center gap-6 text-base">
              <li>
                <Link
                  href={"/experience"}
                  className={
                    pathname === "/experience"
                      ? "text-cyan-600 dark:text-cyan-500 underline"
                      : "hover:underline"
                  }
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href={"/projects"}
                  className={
                    pathname === "/projects"
                      ? "text-cyan-600 dark:text-cyan-500 underline"
                      : "hover:underline"
                  }
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href={"/blogs"}
                  className={
                    pathname === "/blogs"
                      ? "text-cyan-600 dark:text-cyan-500 underline"
                      : "hover:underline"
                  }
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeBtn />
          <button className="sm:hidden" onClick={onMenuOpen}>
            <GiHamburgerMenu className="text-3xl sm:mb-0 mb-[0.2rem]" />
          </button>
        </div>
      </div>
    </nav>
  );
}
