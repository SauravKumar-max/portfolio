"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsXSquareFill,
} from "react-icons/bs";

import { AiOutlineClose } from "react-icons/ai";

type SliderType = {
  imageList: string[];
  onSliderClose: Dispatch<SetStateAction<boolean>>;
};

export function ImageSlider({ imageList, onSliderClose }: SliderType) {
  const [imageIndex, setImageIndex] = useState(0);

  function onPrevImageClick() {
    if (imageIndex === 0) {
      setImageIndex(imageList.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  function onNextImageClick() {
    if (imageIndex + 1 === imageList.length) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen bg-gray-300 bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="absolute top-0 right-0 z-50 mx-4 my-5 sm:mx-10">
        <button onClick={() => onSliderClose(false)}>
          <AiOutlineClose className="stroke-1 text-3xl text-cyan-600 dark:text-cyan-500" />
        </button>
      </div>
      <div className="relative overflow-hidden w-full h-[95%]">
        <Image
          src={imageList[imageIndex]}
          alt={"gallery"}
          fill
          className="object-contain top-1/2"
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 mx-2 lg:mx-8">
          <button onClick={onPrevImageClick}>
            <BsFillCaretLeftFill className="text-4xl md:text-5xl text-cyan-600 dark:text-cyan-500 opacity-50 hover:opacity-100" />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 mx-2 lg:mx-8">
          <button onClick={onNextImageClick}>
            <BsFillCaretRightFill className="text-4xl md:text-5xl text-cyan-600 dark:text-cyan-500 opacity-50 hover:opacity-100" />
          </button>
        </div>
      </div>
    </div>
  );
}
