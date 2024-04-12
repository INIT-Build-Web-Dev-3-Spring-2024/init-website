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
    <div
      className="text-white flex justify-between bg-gradient-to-r from-primary-purple to-secondary-yellow w-1/3 rounded-lg p-3 ml-auto"
      style={{ transform: "translateX(-110px)" }}
    >
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
