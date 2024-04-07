"use client";

import Text from "@/components/Text";
import { twMerge } from "tailwind-merge";
import { Job } from "./JobInfo";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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
  return (
    <>
      <div>
        <Swiper
          className="mySwiper h-96"
          centeredSlides
          // loop={true}
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
