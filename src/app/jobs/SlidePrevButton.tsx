import React from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="absolute left-10 top-1/2 z-50"
      onClick={() => swiper.slidePrev()}
    >
      <CiCircleChevLeft className="text-4xl" />
    </button>
  );
}
