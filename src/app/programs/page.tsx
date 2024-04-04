"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import BuildView from "./BuildView";
import DefaultView from "./DefaultView";
import ProgramCirclePicker from "./ProgramCirclePicker";
import { useEffect } from "react";

const programs = [
  {
    name: "Hack",
    description: "",
    images: [],
  },
];

export default function ProgramsPage() {
  // const programRequest = await fetch("http://localhost:3000/api/programs");
  // const programs: Program[] = await programRequest.json();

  const [currentView] = useLocalStorage("view");

  const viewMap = {
    build: <BuildView />,
  };

  return (
    <>
      <ProgramCirclePicker />

      {currentView && currentView.toLowerCase() in viewMap ? (
        viewMap[currentView.toLowerCase() as keyof typeof viewMap]
      ) : (
        <DefaultView />
      )}
    </>
  );
}
