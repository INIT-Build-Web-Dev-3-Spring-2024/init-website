"use client";

import Hexagon from "@/components/Hexagon";
import InitLogo from "@/components/InitLogo";
import SubTitle from "@/components/SubTitle";
import useAutoQueryString from "@/hooks/useAutoQueryString";
import { getProgramColor } from "@/root/tailwind.config";

interface ProgramLabelProps {
  children: string;
  onClick: (program: string) => unknown;
}

function ProgramLabel({ children: name, onClick }: ProgramLabelProps) {
  return (
    <button className="flex items-center gap-1" onClick={() => onClick(name)}>
      <InitLogo className="w-10 h-10 mb-1" />
      <span style={{ color: getProgramColor(name) }}>
        <SubTitle className="first-letter:capitalize">{name}</SubTitle>
      </span>
    </button>
  );
}

const HEX_CLASS_NAME = "w-40";

export default function ProgramSelector() {
  const [programsVisible, setProgramsVisible] = useAutoQueryString(
    "program",
    true
  ) as [Set<string>, (newVal: string) => void];

  function handleProgramClick(program: string) {
    setProgramsVisible(program);
  }

  return (
    <div className="flex items-center justify-center flex-col -mb-36">
      <div className="flex justify-center">
        <Hexagon
          className={HEX_CLASS_NAME}
          fillOpacity="0.05"
          hiddenStroke={!programsVisible.has("Ignite")}
          borderGradient="always"
        >
          <ProgramLabel onClick={handleProgramClick}>Ignite</ProgramLabel>
        </Hexagon>
        <Hexagon
          className={HEX_CLASS_NAME}
          offset={["top", "sides"]}
          hiddenStroke
        />
        <Hexagon className={HEX_CLASS_NAME} />
      </div>

      <div className="flex justify-center">
        <Hexagon className={HEX_CLASS_NAME} offset={["sides"]} />
        <Hexagon className={HEX_CLASS_NAME} offset={["top"]} />
        <Hexagon
          className={HEX_CLASS_NAME}
          offset={["sides"]}
          fillOpacity="0.05"
          hiddenStroke={!programsVisible.has("Build")}
          borderGradient="always"
        >
          <ProgramLabel onClick={handleProgramClick}>Build</ProgramLabel>
        </Hexagon>
        <Hexagon
          className={HEX_CLASS_NAME}
          borderGradient="always"
          fillOpacity="0.05"
          offset={["top"]}
          hiddenStroke={!programsVisible.has("Uplift")}
        >
          <ProgramLabel onClick={handleProgramClick}>Uplift</ProgramLabel>
        </Hexagon>
        <Hexagon
          className={HEX_CLASS_NAME}
          fillOpacity="0.05"
          offset={["sides"]}
          hiddenStroke={!programsVisible.has("Reach")}
          borderGradient="always"
        >
          <ProgramLabel onClick={handleProgramClick}>Reach</ProgramLabel>
        </Hexagon>
        <Hexagon className={HEX_CLASS_NAME} offset={["top"]} />
        <Hexagon className={HEX_CLASS_NAME} offset={["sides"]} />
      </div>

      <div className="flex justify-center">
        <Hexagon className={HEX_CLASS_NAME} offset={["top"]} />
        <Hexagon className={HEX_CLASS_NAME} offset={["sides"]} />
        <Hexagon
          className={HEX_CLASS_NAME}
          offset={["top"]}
          fillOpacity="0.05"
          hiddenStroke={!programsVisible.has("Explore")}
          borderGradient="always"
        >
          <ProgramLabel onClick={handleProgramClick}>Explore</ProgramLabel>
        </Hexagon>
        <Hexagon
          className={HEX_CLASS_NAME}
          offset={["sides"]}
          fillOpacity="0.05"
          hiddenStroke={!programsVisible.has("Hack")}
          borderGradient="always"
        >
          <ProgramLabel onClick={handleProgramClick}>Hack</ProgramLabel>
        </Hexagon>
        <Hexagon className={HEX_CLASS_NAME} offset={["top"]} />
      </div>

      <div className="flex justify-center">
        <Hexagon hiddenStroke />
      </div>
    </div>
  );
}
