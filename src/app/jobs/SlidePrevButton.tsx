import React from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { useSwiper } from "swiper/react";
import { twMerge } from "tailwind-merge";

export default function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <button
      className={twMerge(
        "absolute left-10 top-1/2 z-50 transition-opacity duration-500",
        swiper.isBeginning && "opacity-20"
      )}
      disabled={swiper.isBeginning}
      onClick={() => swiper.slidePrev()}
    >
      <CiCircleChevLeft className="text-4xl" />
    </button>
  );
}
