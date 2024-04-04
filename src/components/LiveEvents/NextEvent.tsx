import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Text from '../Text';

interface NextEvent {
  title: string;
  description: string;
  onNext: () => void;
}

const NextEvent = (props: NextEvent) => {
  return (
    <div className="text-white flex justify-between bg-gradient-to-r from-purple-500 to-pink-500 w-2/5 rounded-lg p-3 mr-65 ml-auto ">
      <div className="">
        <h2 className="font-bold"> {props.title}</h2>
        <p className="text-sm">{props.description.slice(0, 100) + '...'}</p>
      </div>
      <button className="rounded-full" onClick={props.onNext}>
        <IoIosArrowForward className="text-lg" />
      </button>
    </div>
  );
};

export default NextEvent;
