"use client";

import Text from "@/components/Text";
import { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { twMerge } from "tailwind-merge";

export default function Qualifications() {
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

  return (
    <>
      <div className="flex items-center justify-center gap-10">
        <div className="justify-self-start">
          <button onClick={downCounter}>
            <CiCircleChevLeft className="text-4xl" />
          </button>
        </div>

        <div
          className={twMerge(
            "flex flex-col border border-secondary-gray p-10 pb-20 rounded-xl w-[80%] h-96 overflow-y-scroll no-srollbar",
            "bg-gradient-to-b from-page/80 to-page-dark"
          )}
        >
          <h1 className="text-xl font-2 font-bold"> Role </h1>
          <h2 className="mb-5"> Who you are </h2>
          <Text>
            {/* Role descrpition, NOt in DATA!!!!!!! */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius illum
            perspiciatis impedit nulla aut exercitationem quireprehenderit
            praesentium. Nisi, possimus qui consequatur officiisvoluptatem
            architecto. Culpa aliquam iste animi veritatis! Loremipsum dolor sit
            amet consectetur, adipisicing elit. Eius illumperspiciatis impedit
            nulla aut exercitationem qui reprehenderit praesentium. Nisi,
            possimus qui consequatur officiis voluptatem
          </Text>
          <h2 className="mt-2">Start Date: {"FIX ME"} </h2>
        </div>

        <div className="justify-self-start">
          <button onClick={upCounter}>
            <CiCircleChevRight className="text-4xl" />
          </button>
        </div>
      </div>
    </>
  );
}
