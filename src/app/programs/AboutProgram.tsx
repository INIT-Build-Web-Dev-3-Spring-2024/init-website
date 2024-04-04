import InitLogo from "@/components/InitLogo";
import Text from "@/components/Text";
import { Title } from "@/components/Title";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import tailwindConfig from "@/root/tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const twConfig = resolveConfig(tailwindConfig);

export interface AboutProgramProps {
  name: string;
  description: string;
  images: string[];
}

export default function AboutProgram(props: AboutProgramProps) {
  const { name, description, images } = props;

  function getColor(program: string) {
    const programName = program as keyof typeof twConfig.theme.colors.program; // so typescript can stop
    return twConfig.theme.colors.program[programName];
  }

  return (
    <>
      <div className="flex flex-col justify-center mt-8 w-[300px] ml-8">
        <div
          className={twMerge("mx-auto w-[1px] h-[100px] mb-8")}
          style={{
            backgroundColor: getColor(name.toLowerCase()),
          }}
        />
        <Title className="flex items-center gap-2">
          <span>
            <InitLogo className="w-24 h-24 mb-[10px]" />
          </span>
          <span style={{ color: getColor(name.toLowerCase()) }}>{name}</span>
        </Title>
        <Text className="mt-4 text-sm mb-8">{description}</Text>
        <div
          className="mx-auto w-[1px] h-[100px]"
          style={{
            backgroundColor: getColor(name.toLowerCase()),
          }}
        />

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
