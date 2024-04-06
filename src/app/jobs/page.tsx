import { AnimatedTitle, Title } from "@/components/Title";
import JobInfo from "./JobInfo";
import Qualifications from "./Qualifications";
import InputAndFilters from "@/components/InputAndFilters";
import PositionsFilter from "./PositionsFilter";
import Link from "next/link";
import GradientBorder from "@/components/GradientBorder";
import SubTitle from "@/components/SubTitle";
import { twMerge } from "tailwind-merge";

export default function page() {
  return (
    <>
      <div
        className={twMerge(
          "absolute w-screen h-screen -top-1/2 left-[40%] -translate-x-1/2 -z-50",
          "bg-gradient-radial from-primary-yellow/10 to-transparent to-55%"
        )}
      />

      <header className="mt-20 mb-32 flex flex-col justify-center items-center gap-20">
        <Title>
          <AnimatedTitle>Opportunities</AnimatedTitle>
          <br /> for you
        </Title>

        <PositionsFilter />

        <div className="mx-auto w-[70%]">
          <InputAndFilters
            placeholder="Search by name or type"
            filters={[
              {
                name: "Location",
                options: ["Seattle", "Arlington", "Chicago"],
              },
              {
                name: "Type",
                options: ["Full Time", "Part Time", "Internship"],
              },
              {
                name: "Model",
                options: ["In person", "Hybrid", "Remote"],
              },
            ]}
          />
        </div>
      </header>

      <section>
        <JobInfo
          title="Frond-end Software Engineer"
          description="Participate and learn how to do this and that with the web or even building robots and stuff like that. TECH TECH TECH."
          salary="$89k - 100k"
          level="Junior Mid-level"
          modal="Hybrid"
          company={{
            name: "apple",
            tags: ["B2B", "SAAS", "Internal Tools"],
            logo: "/images/jobs/company/Apple.png",
          }}
        />
      </section>

      <section className="mt-24 mb-20">
        <Qualifications />
      </section>

      <GradientBorder
        className="relative w-[80%] mx-auto text-center mb-32"
        animatedOnHover
      >
        <SubTitle>
          <Link href="#">Apply</Link>
        </SubTitle>

        <div
          className={twMerge(
            "absolute w-screen h-screen -translate-y-56 -right-[80%] -z-50",
            "bg-gradient-radial from-secondary-yellow/10 to-transparent to-70%"
          )}
        >
          asdf
        </div>
      </GradientBorder>
    </>
  );
}
