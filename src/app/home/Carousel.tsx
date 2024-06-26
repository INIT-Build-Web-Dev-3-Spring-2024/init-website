"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";

import { EffectCoverflow, FreeMode, Autoplay, Mousewheel } from "swiper/modules";

export default function Carousel() {
  const slides = [
    "/images/programs/initbuild.webp",
    "/images/programs/initdiscover.webp",
    "/images/programs/inithack.webp",
    "/images/programs/initignite.webp",
    "/images/programs/initlaunch.webp",
    "/images/programs/inituplift.webp",
  ];
  return (
    <>
      <Swiper
        effect={"coverflow"}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        speed={10000}
        freeMode={true}
        grabCursor={true}
        autoplay= {{
          delay: 0,
          pauseOnMouseEnter: false,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 2.5,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Mousewheel, FreeMode, Autoplay]}
        className="mx-0 my-6 h-72"
      >
        {slides.map((url, index) => (
          <SwiperSlide key={index} className="h-72">
            <Image
              className="rounded-xl object-cover"
              src={url}
              fill
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
