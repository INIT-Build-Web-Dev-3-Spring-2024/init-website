"use client";

import CallToAction from "@/components/CallToAction";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import AboutProgram, { AboutProgramProps } from "./AboutProgram";
import ProgramCirclePicker from "./ProgramCirclePicker";

const programs: Record<string, Omit<AboutProgramProps, "name">> = {
  Explore: {
    description:
      "Explore the field of technology through introductory technical workshops",
    images: [],
  },
  Reach: {
    description:
      "Reach your career goals by preparing for interviews and fine-tuning your resume",
    images: [],
  },
  Build: {
    description:
      "Build technical projects by applying your skills and gain experience",
    images: [],
  },
  Hack: {
    description:
      "Hack into a career by learning, building, and networking at hackathons",
    images: [],
  },
  Ignite: {
    description:
      "Ignite the passion for technology by teaching and inspiring the youth",
    images: [],
  },
  Uplift: {
    description:
      "Uplift others looking to start their journey into tech through peer mentorship",
    images: [],
  },
};

export default function ProgramsPage() {
  // const programRequest = await fetch("http://localhost:3000/api/programs");
  // const programs: Program[] = await programRequest.json();

  const [currentProgram] = useLocalStorage("view");

  return (
    <>
      <ProgramCirclePicker />

      {currentProgram && (
        <AboutProgram {...programs[currentProgram]} name={currentProgram} />
      )}

      <CallToAction />
    </>
  );
}
