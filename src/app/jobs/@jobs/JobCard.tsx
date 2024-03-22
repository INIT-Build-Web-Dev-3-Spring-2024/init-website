"use client";

import Image from "next/image";

export type Job = {
  id: number;
  image: string;
  title: string;
  company: string;
  jobType: string;
  jobPosition: string;
  jobLocation: string;
  date: string;
  url: string;
};

export default function JobCard(props: Job) {
  const {
    title,
    jobType,
    jobLocation,
    jobPosition,
    company,
    date,
    image,
    url,
  } = props;

  return (
    <div className="min-w-[16rem] max-w-xs p-5 mb-8 border-[#121415] bg-[#121415] rounded-md shadow-md max-[820px]:mb-8">
      {/* Top of Card */}
      <div className="mb-1 mt-[-0.5em] flex items-center">
        <div className="">
          <Image
            className="mr-4 h-20 w-20 max-[428px]:h-16 max-[428px]:w-16"
            src={image}
            alt={title}
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <h3 className="mb-1 text-lg text-white max-[428px]:text-[0.84rem]">
            {title}
          </h3>
          <p className="text-sm text-white max-[428px]:text-[0.7rem]">
            {company}
          </p>
        </div>
      </div>

      {/* Job Roles Pills */}
      <div className="mb-6">
        <span className="mr-2 rounded bg-blue-100 px-2.5 py-1.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 max-[428px]:text-[9.25px]">
          {jobType}
        </span>

        <span className="mr-2 rounded bg-green-100 px-2.5 py-1.5 text-sm font-medium text-green-800 dark:bg-green-900  dark:text-green-300 max-[428px]:text-[9.25px]">
          {jobPosition}
        </span>

        <span className="mr-2 rounded bg-yellow-100 px-2.5 py-1.5 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 max-[428px]:text-[9.25px]">
          {jobLocation}
        </span>
      </div>

      {/* Date posted and Apply Button */}
      <div className="mb-4 flex items-center">
        <h3 className="mr-8 text-white max-[428px]:text-[0.7rem]">{date}</h3>
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          className="block rounded bg-primary_yellow px-5 py-2 text-sm font-bold text-primary hover:bg-light_yellow focus:ring-light_yellow max-[428px]:px-4 max-[428px]:py-1 max-[428px]:text-[0.8rem]"
        >
          Apply
        </a>
      </div>
    </div>
  );
}
