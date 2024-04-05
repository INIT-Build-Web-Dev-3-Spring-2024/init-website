"use client";

import Hexagon from "../Hexagon";
import SubTitle from "../SubTitle";
import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "./Navbar";

export default function HexagonNavigation() {
  const router = useRouter();
  const pathName = usePathname();

  const links = useMemo(() => {
    const options = navLinks.filter(({ href }) => pathName !== href);

    return options.slice(0, 3);
  }, [pathName]);

  return (
    <div className="flex items-center justify-center flex-col -mb-28">
      <div className="flex justify-center">
        <Hexagon className="w-72" hiddenStroke fillOpacity="0.04" />
        <Hexagon className="w-72" offset={["top", "sides"]} hiddenStroke />
        <Hexagon className="w-72" hiddenStroke fillOpacity="0.04" />
      </div>

      <div className="flex justify-center">
        <Hexagon
          className="w-72"
          offset={["top", "sides"]}
          hiddenStroke
          fillOpacity="0.02"
        />

        {links.map(({ label, href }, index) => (
          <Hexagon
            key={"Hexagon Navigation" + label}
            className="w-72"
            fillOpacity="0.04"
            offset={index % 2 ? ["top", "sides"] : []}
          >
            <button
              className="hover:scale-105 transition-all"
              type="button"
              onClick={() => router.push(href)}
            >
              <SubTitle className="first-letter:capitalize">{label}</SubTitle>
            </button>
          </Hexagon>
        ))}

        <Hexagon
          className="w-72"
          offset={["top", "sides"]}
          hiddenStroke
          fillOpacity="0.02"
        />
      </div>

      <div className="flex justify-center">
        <Hexagon className="w-72" hiddenStroke />
        <Hexagon
          className="w-72"
          offset={["top"]}
          hiddenStroke
          fillOpacity="0.02"
        />
        <Hexagon className="w-72" hiddenStroke />
      </div>
    </div>
  );
}
