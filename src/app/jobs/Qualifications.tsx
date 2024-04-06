"use client";

import Button from "@/components/Button";
import Text from "@/components/Text";
import { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

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
      <div className="flex items-center justify-center pt-40 pb-20 gap-10">
        <div className="justify-self-start">
          <button onClick={downCounter}>
            <CiCircleChevLeft className="text-4xl" />
          </button>
        </div>

        <div className="flex flex-col border border-secondary-gray p-10 pb-20 rounded-xl w-[80vw]">
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

      <Button
        borderGradient="always"
        onClick={() => null}
        className="w-[80vw] mx-auto text-center mb-20"
      >
        Apply
      </Button>
    </>
  );
}
