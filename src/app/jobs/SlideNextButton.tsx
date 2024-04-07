import React from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { useSwiper } from "swiper/react";
import { twMerge } from "tailwind-merge";

export default function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <button
      className={twMerge(
        "absolute right-10 top-1/2 z-50 transition-opacity duration-500",
        swiper.isEnd && "opacity-20"
      )}
      disabled={swiper.isEnd}
      onClick={() => swiper.slideNext()}
    >
      <CiCircleChevRight className="text-4xl" />
    </button>
  );
}
