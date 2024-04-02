"use client";

import Button from "@/components/Button";
import GradientBorder from "@/components/GradientBorder";
import Hexagon from "@/components/Hexagon";
import InputAndFilters from "@/components/InputAndFilters";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import { AnimatedTitle, Title } from "@/components/Title";
import useAutoQueryString from "@/hooks/useAutoQueryString";
import { ChangeEvent } from "react";
import HoverEffect from "@/components/hoverEff";

export default function Page() {
  const [input, setInput] = useAutoQueryString();

  function handleFilter(e: ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.name, e.target.value);
  }

  return (
    <>
      <Title>
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
    <HoverEffect className='rounded-md'>
        <div className=" p-10">any element inside</div>
    </HoverEffect>
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
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="flex justify-center">
          <Hexagon className="w-40" fillOpacity="0.05" hiddenStroke>
            <SubTitle>Init ignite</SubTitle>
          </Hexagon>
          <Hexagon className="w-40" offset={["top", "sides"]} hiddenStroke />
          <Hexagon className="w-40"></Hexagon>
        </div>

        <div className="flex justify-center">
          <Hexagon className="w-40" offset={["sides"]} />
          <Hexagon className="w-40" offset={["top"]} />
          <Hexagon
            className="w-40"
            fillOpacity="0.05"
            offset={["sides"]}
            hiddenStroke
          >
            <SubTitle>Init Build</SubTitle>
          </Hexagon>
          <Hexagon
            className="w-40"
            fillOpacity="0.05"
            offset={["top"]}
            hiddenStroke
          >
            <SubTitle>Init uplift</SubTitle>
          </Hexagon>
          <Hexagon
            className="w-40"
            fillOpacity="0.05"
            offset={["sides"]}
            hiddenStroke
          >
            <SubTitle>Init Reach</SubTitle>
          </Hexagon>
          <Hexagon className="w-40" offset={["top"]} />
          <Hexagon className="w-40" offset={["sides"]} />
        </div>

        <div className="flex justify-center">
          <Hexagon className="w-40" offset={["top"]} />
          <Hexagon className="w-40" offset={["sides"]} />
          <Hexagon
            className="w-40"
            borderGradient="always"
            fillOpacity="0.05"
            offset={["top"]}
          >
            <SubTitle>Init Explore</SubTitle>
          </Hexagon>
          <Hexagon
            className="w-40"
            fillOpacity="0.05"
            offset={["sides"]}
            hiddenStroke
          >
            <SubTitle>Init hack</SubTitle>
          </Hexagon>
          <Hexagon className="w-40" offset={["top"]} />
        </div>
      </div>
    </>
  );
}
