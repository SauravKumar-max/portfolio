import React from "react";
import { Html } from "@react-three/drei";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loader() {
  return (
    <>
      <Html prepend center>
        <AiOutlineLoading3Quarters className="text-2xl sm:text-3xl -mt-12 fill-cyan-600 dark:fill-cyan-500 animate-spin" />
      </Html>
    </>
  );
}
