import Image from "next/image";
import React from "react";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";

const Numbers = () => {
  return (
    <div className="relative h-96 overflow-visible">
      <div className="absolute -left-10 h-[150%] w-3/4">
        {/* <div className="w-2/3 relative"> */}
        <Image
          className="object-contain relative -z-50"
          src="/images/icons/bg-image.png"
          fill
          alt="background image"
        />
        {/* </div> */}
      </div>

      <div className="grid grid-cols-2 gap-5 h-full">
        <div className="flex text-right flex-col-reverse text-9xl">
          <h1>4500</h1>
        </div>
        <div className="flex">
          <div className="self-end w-1/3">
            <SubTitle>members</SubTitle>
            <Text>
              An in-depth guide to understanding the principles, structures, and
              benefits.
            </Text>
          </div>
        </div>
        <div className="ml-auto w-1/3 text-right">
          <SubTitle>students</SubTitle>
          <Text>
            An in-depth guide to understanding the principles, structures, and
            benefits.
          </Text>
        </div>
        <div className="text-9xl">320</div>
      </div>
    </div>
  );
};

export default Numbers;
