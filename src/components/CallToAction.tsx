"use client";

import { FaDiscord } from "react-icons/fa";
import Button from "./Button";
import InitLogo from "./InitLogo";
import Text from "./Text";
import { AnimatedTitle, Title } from "./Title";

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

      <div className="flex justify-center mt-8 gap-2 mb-10">
        <Button
          borderGradient="onHover"
          target="_blank"
          href="https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog"
        >
          <span className="flex justify-center items-center gap-2 w-28">
            <Text>Get</Text>
            <InitLogo className="w-8 h-8" />
          </span>
        </Button>

        <Button
          borderGradient="onHover"
          target="_blank"
          href="https://discord.gg/init"
        >
          <span className="flex justify-center items-center gap-2 w-28 mt-1">
            <span>
              <FaDiscord className="text-xl" />
            </span>
            <Text>Discord</Text>
          </span>
        </Button>
      </div>
    </>
  );
}
