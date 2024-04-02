import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface NextEvent {
  title: string;
  description: string;
}
const NextEvent = (props: NextEvent) => {
  return (
    <div className="text-white flex justify-between bg-gradient-to-r from-purple-500 to-pink-500 w-2/5 h-2/6 rounded-lg p-1 mr-65 ml-auto ">
      <div className="">
        <p className="">{props.title}</p>
        <p>{props.description}</p>
      </div>
      <button className="rounded-full p-2 ">
        <IoIosArrowForward className="text-lg" />
      </button>
    </div>
  );
};

export default NextEvent;
