import { twMerge } from "tailwind-merge";
import Text from "@/components/Text";
import Image from "next/image";
import SubTitle from "@/components/SubTitle";

export type Job = {
  title: string;
  description: string;
  salary: string;
  level: string;
  modal: string;
  company: {
    name: string;
    tags: string[];
    logo: string;
  };
};

export default function JobInfo(props: Job) {
  const { title, description, salary, level, modal, company } = props;

  return (
    <div
      className={twMerge(
        "flex items-center justify-center py-10 px-32 border-y border-secondary-gray",
        "bg-gradient-radial from-page to-95% to-primary-purple"
      )}
    >
      <div
        className={twMerge(
          "relative flex gap-8 border border-secondary-gray rounded-xl p-5 w-[80vw]",
          "bg-gradient-to-b from-page to-page-dark"
        )}
      >
        <div className="w-full">
          <SubTitle className="py-3 text-xl font-2 font-bold">{title}</SubTitle>
          <Text className="py-3">{description}</Text>
          <Text className="bg-green-600  py-2 px-4 w-fit rounded-md">
            {salary}
          </Text>
          <Text className="py-3">{level}</Text>
          <Text className="py-3">{modal}</Text>
        </div>

        <div className="w-0.5 self-stretch bg-secondary-gray" />

        <div className="w-full">
          <div className="relative w-24 h-24">
            <Image
              src={company.logo}
              alt="logo"
              className="object-contain"
              fill
            />
          </div>

          <SubTitle className="py-3">{company.name}</SubTitle>

          <div className="flex gap-2">
            {company.tags.map((tag) => (
              <div
                key={tag}
                className="border border-secondary-gray px-3 py-2 w-fit rounded-md"
              >
                {tag}
              </div>
            ))}
          </div>

          <div className="mt-3 py-3 px-3 bg-green-600 justify-center rounded-md flex ">
            Open for Applications
          </div>
        </div>
      </div>
    </div>
  );
}
