"use client";

import CallToAction from "@/components/CallToAction";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import AboutProgram, { AboutProgramProps } from "./AboutProgram";
import ProgramCirclePicker from "./ProgramCirclePicker";
import BuildProjectGallery from "./(BuildProjectGallery)";

const programs: Record<string, Omit<AboutProgramProps, "name">> = {
  Explore: {
    description:
      "Explore the field of technology through introductory technical workshops",
    skillsDescription: "Explain what Explore does and teach",
    images: [
      "/images/programCards/explore/exploreOne.webp",
      "/images/programCards/explore/exploreTwo.webp",
    ],
  },
  Reach: {
    description:
      "Reach your career goals by preparing for interviews and fine-tuning your resume",
    skillsDescription: "Explain what Reach does and teach",
    images: [
      "/images/programCards/reach/reachOne.webp",
      "/images/programCards/reach/reachTwo.webp",
    ],
  },
  Build: {
    description:
      "Build technical projects by applying your skills and gain experience",
    skillsDescription: "Explain what Build does and teach",
    images: [
      "/images/programCards/build/buildOne.webp",
      "/images/programCards/build/buildTwo.webp",
    ],
  },
  Hack: {
    description:
      "Hack into a career by learning, building, and networking at hackathons",
    skillsDescription: "Explain what Hack does and teach",
    images: [
      "/images/programCards/hack/hackOne.webp",
      "/images/programCards/hack/hackTwo.webp",
    ],
  },
  Ignite: {
    description:
      "Ignite the passion for technology by teaching and inspiring the youth",
    skillsDescription: "Explain what Ignite does and teach",
    images: [
      "/images/programCards/ignite/igniteOne.webp",
      "/images/programCards/ignite/igniteTwo.webp",
    ],
  },
  Uplift: {
    description:
      "Uplift others looking to start their journey into tech through peer mentorship",
    skillsDescription: "Explain what Uplift does and teach",
    images: [
      "/images/programCards/uplift/upliftOne.webp",
      "/images/programCards/uplift/upliftTwo.webp",
    ],
  },
};

export default function ProgramsPage() {
  const [currentProgram] = useLocalStorage("view");

  function pickView() {
    switch (currentProgram) {
      case "Build":
        return <BuildProjectGallery />;

      default:
        return;
    }
  }

  return (
    <>
      <ProgramCirclePicker />

      {currentProgram && (
        <AboutProgram {...programs[currentProgram]} name={currentProgram} />
      )}

      {pickView()}

      <CallToAction />
    </>
  );
}
