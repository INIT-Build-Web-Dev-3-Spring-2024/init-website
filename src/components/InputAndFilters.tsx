"use client";

import useAutoQueryString from "@/hooks/useAutoQueryString";
import { Fragment } from "react";
import { IoIosSearch } from "react-icons/io";
import DropDownMenu, { DropDownMenuProps } from "./DropDownMenu";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface InputAndFiltersProps {
  placeholder?: string;
  filters?: Array<DropDownMenuProps>;
  name?: string;
}

export default function InputAndFilters(props: InputAndFiltersProps) {
  const { placeholder = "search", name, filters } = props;
  const { refresh } = useRouter();
  const [input, setInput] = useAutoQueryString(name);

  return (
    <div className="relative md:flex flex-row items-center justify-center gap-2 border border-secondary-gray py-3 px-7 rounded-xl">
      <div className="flex md:contents">
        <button
          onClick={() => refresh()}
          className="p-0 border-none my-auto active:scale-95 transition-all"
        >
          <IoIosSearch className="text-3xl my-auto" />
        </button>
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent focus:outline-none"
        />
      </div>

      <div className="mt-3 sm:mt-0 text-center block sm:flex items-center gap-5 justify-evenly">
        {filters?.map((filter, index) => (
          <Fragment key={filter.name}>
            <DropDownMenu {...filter} />

            {/* gap separator between each filter */}
            {index !== filters.length - 1 && (
              <div className="m-2 sm:m-0 h-[2px] w-fill sm:h-10 sm:w-[2px] bg-secondary-gray [content:'_']" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
