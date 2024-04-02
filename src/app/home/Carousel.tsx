"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//TODO: will import images here to map them from assets

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "swiper/css/free-mode";

import { EffectCoverflow, Mousewheel, FreeMode } from "swiper/modules";

//TODO: create styling to be used between transitions
//TODO: add trasition animation 
export default function Carousel() {
  return (
    <>
      <Swiper
        //effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        mousewheel={true}
        modules={[EffectCoverflow, Mousewheel, FreeMode]}
      >
        <SwiperSlide >
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="rounded-xl"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
