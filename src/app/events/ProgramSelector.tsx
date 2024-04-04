"use client";

import Hexagon from "@/components/Hexagon";
import InitLogo from "@/components/InitLogo";
import SubTitle from "@/components/SubTitle";
import { getProgramColor } from "@/root/tailwind.config";

interface ProgramLabelProps {
  children: string;
}

function ProgramLabel({ children }: ProgramLabelProps) {
  return (
    <span className="flex items-center gap-1">
      <InitLogo className="w-10 h-10 mb-1" />
      <span style={{ color: getProgramColor(children) }}>
        <SubTitle className="first-letter:capitalize">{children}</SubTitle>
      </span>
    </span>
  );
}

export default function ProgramSelector() {
  const hexClassNames = "w-40";

  return (
    <div className="flex items-center justify-center flex-col mb-24">
      <div className="flex justify-center">
        <Hexagon className={hexClassNames} fillOpacity="0.05" hiddenStroke>
          <ProgramLabel>Ignite</ProgramLabel>
        </Hexagon>
        <Hexagon
          className={hexClassNames}
          offset={["top", "sides"]}
          hiddenStroke
        />
        <Hexagon className={hexClassNames} />
      </div>

      <div className="flex justify-center">
        <Hexagon className={hexClassNames} offset={["sides"]} />
        <Hexagon className={hexClassNames} offset={["top"]} />
        <Hexagon
          className={hexClassNames}
          offset={["sides"]}
          fillOpacity="0.05"
          hiddenStroke
        >
          <ProgramLabel>Build</ProgramLabel>
        </Hexagon>
        <Hexagon
          className={hexClassNames}
          borderGradient="always"
          fillOpacity="0.05"
          offset={["top"]}
        >
          <ProgramLabel>Uplift</ProgramLabel>
        </Hexagon>
        <Hexagon
          className={hexClassNames}
          fillOpacity="0.05"
          offset={["sides"]}
          hiddenStroke
        >
          <ProgramLabel>Reach</ProgramLabel>
        </Hexagon>
        <Hexagon className={hexClassNames} offset={["top"]} />
        <Hexagon className={hexClassNames} offset={["sides"]} />
      </div>

      <div className="flex justify-center">
        <Hexagon className={hexClassNames} offset={["top"]} />
        <Hexagon className={hexClassNames} offset={["sides"]} />
        <Hexagon
          className={hexClassNames}
          offset={["top"]}
          fillOpacity="0.05"
          hiddenStroke
        >
          <ProgramLabel>Explore</ProgramLabel>
        </Hexagon>
        <Hexagon
          className={hexClassNames}
          fillOpacity="0.05"
          hiddenStroke
          offset={["sides"]}
        >
          <ProgramLabel>Explore</ProgramLabel>
        </Hexagon>
        <Hexagon className={hexClassNames} offset={["top"]} />
      </div>
    </div>
  );
}
