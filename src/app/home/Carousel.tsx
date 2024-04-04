"use client";

import "swiper/css";
import "swiper/css/free-mode";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

//TODO: recheck mapping

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

//TODO: create styling to be used between transitions
//TODO: add transition animation
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
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        pagination={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mx-0 mt-10 mb-10 h-72"
      >
        {slides.map((url, index) => (
          <SwiperSlide key={index} className="mx-10 h-72">
            <Image
              className="rounded-xl object-contain"
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
