//import { Card } from "flowbite-react";
"use client";

import Image from "next/image";

export type Company = {
  image: string;
  name: string;
  id: number;
  index: number;
};

// type CompanyCardProps = {
//   company: Company[];
//   setJobPostings: React.Dispatch<
//     React.SetStateAction<
//       {
//         image: string;
//         company: string;
//         id: number;
//         date: string;
//         title: string;
//         jobType: string;
//         jobPosition: string;
//         jobLocation: string;
//         url: string;
//       }[]
//     >
//   >;
//   setGroupByCompany: React.Dispatch<React.SetStateAction<boolean>>;
//   fetchJobsByCompany: (companyName: string) => void;
// };

let wasViewJobsClicked = false;

export function setWasViewJobsClicked(value: boolean) {
  wasViewJobsClicked = value;
}

export function getWasViewJobsClicked() {
  return wasViewJobsClicked;
}

type CompanyCardComponent = { company: Company };

export default function CompanyCard({ name, image, id, index }: Company) {
  // function handleSubmit(companyName: string) {
  //   setJobPostings((prevArr) =>
  //     prevArr.filter((item) => item.company === companyName),
  //   );
  //   fetchJobsByCompany(companyName);
  //   setGroupByCompany(false);
  // }

  return (
    <div>
      {/* {company.map((companyCard, index) => ( */}
      <div
        key={index}
        className=" mb-8  h-[250px] w-[315px] border-[#121415] bg-[#121415] max-[820px]:mb-8 p-3"
      >
        <div className="mb-1 mt-[-0.5em] flex items-center self-center">
          {/* justify-center */}
          <div className="flex items-center">
            <Image
              className=" mt-5 h-[125px] w-full items-center justify-center "
              width={125}
              height={125}
              src={image}
              alt={name}
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col items-center justify-between gap-5">
          <h2 className=" w-full flex-nowrap text-center text-white">{name}</h2>
          <button
            // onClick={() => handleSubmit(name)}
            value={name}
            rel="noopener noreferrer"
            className="block h-[36px] w-full flex-nowrap rounded bg-primary_yellow px-4  py-2 text-sm font-bold text-primary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-600 max-[428px]:px-4 max-[428px]:py-1 max-[428px]:text-[0.8rem]"
          >
            Jobs Posted: {id}
          </button>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}
