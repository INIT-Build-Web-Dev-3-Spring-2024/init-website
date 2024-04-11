"use client";

import Image from "next/image";

export type Company = {
  image: string;
  name: string;
  id: number;
  index: number;
};

let wasViewJobsClicked = false;

export function setWasViewJobsClicked(value: boolean) {
  wasViewJobsClicked = value;
}

export function getWasViewJobsClicked() {
  return wasViewJobsClicked;
}

export default function CompanyCard({ name, image, id, index }: Company) {
  return (
    <div
      key={index}
      className=" mb-8 h-[250px] w-[315px] border-[#121415] bg-[#121415] max-[820px]:mb-8 p-3 rounded-md shadow-md"
    >
      <div className="mb-1 mt-[-0.5em] flex items-center justify-center">
        {/* justify-center */}
        <Image
          className="mt-5 h-[125px]"
          width={125}
          height={125}
          src={image}
          alt={name}
        />
      </div>
      <div className="mb-4 flex flex-col items-center justify-between gap-5">
        <h2 className=" w-full flex-nowrap text-center text-white">{name}</h2>
        <button
          value={name}
          rel="noopener noreferrer"
          className="block h-[36px] w-full flex-nowrap rounded bg-primary_yellow px-4  py-2 text-sm font-bold text-primary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-600 max-[428px]:px-4 max-[428px]:py-1 max-[428px]:text-[0.8rem]"
        >
          Jobs Posted: {id}
        </button>
      </div>
    </div>
  );
}
