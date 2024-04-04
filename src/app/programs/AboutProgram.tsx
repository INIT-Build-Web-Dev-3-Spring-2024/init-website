import Button from "@/components/Button";
import { Title, AnimatedTitle } from "@/components/Title";
import Text from "@/components/Text";
import Image from "next/image";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export interface AboutProgramProps {
  name: string;
  description: string;
  images: string[];
}

export default function AboutProgram(props: AboutProgramProps) {
  const { name, description, images } = props;

  return (
    <>
      <div className="flex flex-col justify-center mt-8 w-[300px] ml-8">
        <div className="mx-auto w-[1px] h-[100px] bg-white mb-8" />
        <Title>
          INIT <AnimatedTitle>{name}</AnimatedTitle>
          <Text className="mt-4 text-sm mb-8">{description}</Text>
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
    </>
  );
}
