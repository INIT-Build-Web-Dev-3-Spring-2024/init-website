import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Text from "@/components/Text";
import SubTitle from "@/components/SubTitle";

interface NextEvent {
  title: string;
  description: string;
  onNext: () => void;
}

const NextEvent = (props: NextEvent) => {
  return (
    <div className="text-white flex justify-between bg-gradient-to-r from-purple-500 to-pink-500 w-1/3 rounded-lg p-3 ml-auto">
      <div>
        <SubTitle className="font-bold">{props.title}</SubTitle>
        <Text className="text-sm">
          {props.description.slice(0, 100) + "..."}
        </Text>
      </div>
      <button className="rounded-full" onClick={props.onNext}>
        <IoIosArrowForward className="text-lg" />
      </button>
    </div>
  );
};

export default NextEvent;
