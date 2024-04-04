"use client";

import CallToAction from "@/components/CallToAction";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import AboutProgram, { AboutProgramProps } from "./AboutProgram";
import ProgramCirclePicker from "./ProgramCirclePicker";

const programs: Record<string, Omit<AboutProgramProps, "name">> = {
  Hack: {
    description:
      "Hack into a career by learning, building, and networking at hackathons",
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
