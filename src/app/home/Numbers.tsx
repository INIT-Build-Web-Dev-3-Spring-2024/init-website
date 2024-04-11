import Image from "next/image";
import React from "react";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import { Handjet } from "next/font/google";

const handjet = Handjet({ subsets: ["latin"] });

const Numbers = () => {
  return (
    <div className="relative h-fit overflow-x-clip mb-24">
      <div className="absolute -left-10 h-[150%] w-full">
        {/* <div className="w-2/3 relative"> */}
        <Image
          className="object-contain relative -z-50 -translate-y-36"
          src="/images/icons/bg-image.png"
          fill
          alt="background image"
        />
        {/* </div> */}
      </div>

      <div className="grid grid-cols-2 gap-5 h-full items-center">
        <div className="flex text-right flex-col-reverse">
          <div
            className={`leading-none text-[14rem] max-sm:text-7xl ${handjet.className}`}
          >
            4500
          </div>
        </div>
        <div className="flex">
          <div className="self-end w-1/3 max-sm:w-full">
            <SubTitle className="text-3xl max-sm:text-2xl">members</SubTitle>
            <Text className="font-light max-sm:text-sm">
              An in-depth guide to understanding the principles, structures, and
              benefits.
            </Text>
          </div>
        </div>
        <div className="ml-auto w-1/3 max-sm:w-full text-right">
          <SubTitle className="text-3xl max-sm:text-2xl">students</SubTitle>
          <Text className="font-light max-sm:text-sm">
            An in-depth guide to understanding the principles, structures, and
            benefits.
          </Text>
        </div>
        <div
          className={`leading-none text-[14rem] max-sm:text-7xl ${handjet.className}`}
        >
          320
        </div>
      </div>
    </div>
  );
};

export default Numbers;
