"use client";
import { Title, AnimatedTitle } from "@/components/Title";
import ProgramCard from "./programCard";
import Image from "next/image";
import Text from "@/components/Text";
import Button from "@/components/Button";

export default 
// async
 function ProgramsPage() {
  interface Program {
    name: string;
    color: string;
    image: string;
    description: string;
  }

  // const programRequest = await fetch("http://localhost:3000/api/programs");
  // const programs: Program[] = await programRequest.json();

  return (
    <>
      <div className="flex flex-col justify-center mt-8 w-[300px] ml-8">
        <div className="mx-auto w-1 h-[100px] bg-white" />

        <Image
          className="mb-8"
          src="images/testimonial.svg"
          alt="Picture of computers"
          width={300}
          height={300}
        />
      </div>

      <Title>
        Become a <AnimatedTitle>Member</AnimatedTitle>
      </Title>

      <Text className="w-[80vw] m-auto mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, laborum
        numquam aspernatur aliquid fugiat quo fugit sit cum temporibus esse
        explicabo quia. Repudiandae aliquid, voluptas repellendus ipsa modi sint
        error.
      </Text>

      <div className="flex justify-center mt-8">
        <Button gradientBorder onClick={() => null} className="">
          Get INIT
        </Button>
        <Button href="" className="flex justify-center gap-2">
          <Image
            src="images/discord-icon.svg"
            alt="Picture of discord"
            width={15}
            height={15}
          />
          Discord
        </Button>
      </div>
    </>
  );
}
