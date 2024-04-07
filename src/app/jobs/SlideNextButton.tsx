import React from "react";
import { CiCircleChevRight } from "react-icons/ci";
import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="absolute right-10 top-1/2 z-50"
      onClick={() => swiper.slideNext()}
    >
      <CiCircleChevRight className="text-4xl" />
    </button>
  );
}
