import React, { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MobileMenuType = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export function MobileMenu({ setOpenMenu }: MobileMenuType) {
  const pathname = usePathname();

  function onMenuClose() {
    setOpenMenu(false);
  }

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-screen z-40 bg-transparent"
        onClick={onMenuClose}
      ></div>
      <div className="w-48 fixed top-12 right-4 z-50 rounded shadow-md bg-white dark:bg-slate-700">
        <ul className="flex flex-col gap-0.5 py-2 text-base dark:text-white">
          <li>
            <Link
              onClick={onMenuClose}
              href={"/experience"}
              className={`w-full block py-2 px-4 hover:bg-gray-200 dark:hover:bg-slate-500 ${
                pathname === "/experience"
                  ? "bg-gray-200 dark:bg-slate-500"
                  : ""
              }`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              onClick={onMenuClose}
              href={"/projects"}
              className={`w-full block py-2 px-4 hover:bg-gray-200 dark:hover:bg-slate-500 ${
                pathname === "/projects" ? "bg-gray-200 dark:bg-slate-500" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={onMenuClose}
              href={"/blogs"}
              className={`w-full block py-2 px-4 hover:bg-gray-200 dark:hover:bg-slate-500 ${
                pathname === "/blogs" ? "bg-gray-200 dark:bg-slate-500" : ""
              }`}
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
