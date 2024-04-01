import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

// # going to be a card with the title of the next event
// one liner explainng event under title
// button to view next event

interface NextEvent {
  title: string;
  description: string;
}
const NextEvent = (props: NextEvent) => {
  return (
    <div className="text-white flex flex-col bg-gradient-to-r from-purple-500 to-pink-500	 w-2/5 rounded mx-auto p-2 ">
      <p className="">{props.title}</p>
      <p>{props.description}</p>
      <button className="rounded-full p-2 ">
        <IoIosArrowForward className="text-lg" />
      </button>
    </div>
  );
};

export default NextEvent;
