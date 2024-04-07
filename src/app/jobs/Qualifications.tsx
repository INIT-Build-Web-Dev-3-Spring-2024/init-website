"use client";

import Text from "@/components/Text";
import { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { twMerge } from "tailwind-merge";
import { Job } from "./JobInfo";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";

export default function Qualifications({
  jobs,
  setJobIdx,
}: {
  jobs: Job[];
  setJobIdx: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [count, setCount] = useState(0);

  function upCounter() {
    let moveUp = count + 1;
    setCount(moveUp);
  }
  function downCounter() {
    let moveDown = count - 1;
    setCount(moveDown);
    console.log("Moved by 1: " + count);
  }
  const swiper = useSwiper();
  // <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  return (
    <>
      {/* <div className="flex items-center justify-center gap-10">
        <div className="justify-self-start">
          <button onClick={downCounter}>
            <CiCircleChevLeft className="text-4xl" />
          </button>
        </div> */}

      <div>
        <Swiper
          // navigation={true}
          // modules={[Navigation]}
          className="mySwiper h-96 overflow-visible"
          // _swiper={swiper}
          centeredSlides
          loop={true}
          onSlideChange={(e) => setJobIdx(e.realIndex)}
        >
          <SlidePrevButton />
          <SlideNextButton />
          {jobs.map((job) => (
            <SwiperSlide key={job.id}>
              <div
                className={twMerge(
                  "flex flex-col border border-secondary-gray p-10 rounded-xl w-[80%] h-96 overflow-y-scroll no-srollbar mx-auto",
                  "bg-gradient-to-b from-page/80 to-page-dark"
                )}
              >
                <h1 className="text-xl font-2 font-bold"> Role </h1>
                <h2 className="mb-5"> Who you are </h2>
                <Text className="whitespace-pre text-wrap">
                  {job.roleDescription}
                </Text>
                <h2 className="mt-2">
                  {job.startDate && `Start Date: ${job.startDate}`}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
