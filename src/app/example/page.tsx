"use client";

import GradientBorder from "@/components/GradientBorder";
import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import { Title, AnimatedTitle } from "@/components/Title";
import useAutoQueryString from "@/hooks/useAutoQueryString";
import InputAndFilters from "@/components/InputAndFilters";
import { ChangeEvent } from "react";
import { Action_Block } from "@/components/Mission_Statement";

export default function Page() {
  const [input, setInput] = useAutoQueryString();

  function handleFilter(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.name, e.target.value);
  }

  return (
    <>
      {/* <Title>
        Your <AnimatedTitle>TECH</AnimatedTitle> Journey is about to start
      </Title>

      <SubTitle>Get to know us</SubTitle>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, laborum
        numquam aspernatur aliquid fugiat quo fugit sit cum temporibus esse
        explicabo quia. Repudiandae aliquid, voluptas repellendus ipsa modi sint
        error.
      </Text>

      <GradientBorder disabled animated animatedOnHover className="m-20">
        <div>any element inside</div>
      </GradientBorder>

      <Button borderGradient="always" onClick={() => null} className="m-10">
        Always border gradient button
      </Button>

      <Button borderGradient="onHover" onClick={() => null} className="m-10">
        Border gradient on hover
      </Button>

      <Button href="#" className="m-10">
        link to a thing
      </Button>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-black focus:outline-none border"
      />

      <div className="mx-auto w-3/4 my-5">
        <InputAndFilters
          placeholder="Search by name or type"
          filters={[
            {
              name: "Location",
              options: ["Seattle", "Arlington", "Chicago"],
              onChange: handleFilter,
            },
            {
              name: "Type",
              options: ["Full Time", "Part Time", "Internship"],
              onChange: handleFilter,
            },
            {
              name: "Program",
              options: ["Expolore", "Build", "Reach"],
            },
          ]}
        />
      </div> */}
      <Action_Block></Action_Block>
    </>
  );
}
