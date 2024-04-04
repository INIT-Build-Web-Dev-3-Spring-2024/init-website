"use client";

import Button from "./Button";
import { Title, AnimatedTitle } from "./Title";
import Image from "next/image";
import Text from "./Text";

export default function CallToAction() {
  return (
    <>
      <Title>
        Become a <AnimatedTitle>Member</AnimatedTitle>
      </Title>

      <Text className="w-[80vw] m-auto mt-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, laborum
        numquam aspernatur aliquid fugiat quo fugit sit cum temporibus esse
        explicabo quia. Repudiandae aliquid, voluptas repellendus ipsa modi sint
        error.
      </Text>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          borderGradient="onHover"
          target="_blank"
          href="https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog"
          className=""
        >
          Get INIT
        </Button>
        <Button
          borderGradient="onHover"
          target="_blank"
          href="https://discord.gg/init"
        >
          <div className="flex justify-center gap-2 w-16">
            <Image
              src="images/discord-icon.svg"
              alt="Picture of discord"
              width={15}
              height={15}
            />
            Discord
          </div>
        </Button>
      </div>
    </>
  );
}
