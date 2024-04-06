"use client";

import Button from "@/components/Button";
import { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import JobsCard, { Job } from "./JobsCard";
import RoleCard from "./RoleCard";

function CounterComopnent({
  jobInfo,
  counter,
}: {
  jobInfo: Job[];
  counter: number;
}) {
  const [count, setCount] = useState(0);

  function upCounter() {
    let moveUp = (count +1) % counter
    setCount(moveUp);
  }
  function downCounter() {
    let moveDown = (count-1+counter) % counter
    setCount(moveDown);
    console.log("Moved by 1: " + count);
  }

  // useEffect(() =>{
  //     if(count > counter){
  //         setCount(0)
  //     }
  //     if(count < counter){
  //         setCount(counter)
  //     }
  // }, [])

  return (
    <>
      <JobsCard {...jobInfo[count]} />

      <div className="flex items-center justify-center pt-40 pb-20 gap-10">
        <div className="justify-self-start">
          <button onClick={downCounter}>
            <CiCircleChevLeft className="text-4xl" />
          </button>
        </div>

        <div className="w-[80vw]">
          <RoleCard {...jobInfo[count]} />
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

export default CounterComopnent;
