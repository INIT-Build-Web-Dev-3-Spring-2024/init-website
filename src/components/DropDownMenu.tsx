"use client";

import { ChangeEvent, ChangeEventHandler } from "react";
import Text from "./Text";
import useAutoQueryString from "@/hooks/useAutoQueryString";

export interface DropDownMenuProps {
  name: string;
  options: string[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export default function DropDownMenu(props: DropDownMenuProps) {
  const { name, options, onChange } = props;

  // save what the user select in the query url string
  const [query, setQuery] = useAutoQueryString(name);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setQuery(e.target.value);
    onChange && onChange(e); // ensure onChange is not undefined before calling
  }

  return (
    <div className="relative">
      <Text className="text-white font-bold text-center">{name}</Text>
      <select
        onChange={handleChange}
        value={query}
        name={name}
        className="bg-transparent focus:outline-none appearance-none p-0 text-center"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={name + opt} value={opt} className="text-secondary-gray">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
