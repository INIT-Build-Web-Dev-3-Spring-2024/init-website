import Button from "@/components/Button";
import { Title, AnimatedTitle } from "@/components/Title";
import Text from "@/components/Text";
import Image from "next/image";

export default function DefaultView() {
  return (
    <>
      <div className="flex flex-col justify-center mt-8 w-[300px] ml-8">
        <div className="mx-auto w-[1px] h-[100px] bg-white mb-8" />
        <Title>
          INIT <AnimatedTitle>Build</AnimatedTitle>
          <Text className="mt-4 text-sm mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </Title>
        <div className="mx-auto w-[1px] h-[100px] bg-white" />

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
