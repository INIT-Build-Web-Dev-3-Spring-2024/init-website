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
  const router = useRouter();
  const [input, setInput] = useAutoQueryString(name);

  function reload() {
    router.refresh();
  }

  return (
    <div className="relative flex items-center justify-center gap-2 border border-secondary-gray py-3 px-7 rounded-xl">
      <Button onClick={reload} className="p-0 border-none my-auto">
        <IoIosSearch className="text-3xl my-auto" />
      </Button>
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full bg-transparent focus:outline-none"
      />

      <div className="flex items-center gap-5">
        {filters?.map((filter, index) => (
          <Fragment key={filter.name}>
            <DropDownMenu {...filter} />

            {/* gap separator between each filter */}
            {index !== filters.length - 1 && (
              <div className="h-10 w-[2px] bg-secondary-gray [content:'_']" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
