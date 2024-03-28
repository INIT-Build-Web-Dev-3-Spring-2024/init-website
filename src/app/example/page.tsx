"use client";

import GradientBorder from "@/components/GradientBorder";
import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";
import Text from "@/components/Text";
import { Title, AnimatedTitle } from "@/components/Title";

export default function page() {
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
        <div>any element inside</div>
      </GradientBorder>

      <Button gradientBorder onClick={() => null} className="m-10">
        Hello world
      </Button>

      <Button href="" className="m-10">
        Hello world
      </Button>
    </>
  );
}
