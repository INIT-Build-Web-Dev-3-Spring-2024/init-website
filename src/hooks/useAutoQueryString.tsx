"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function useAutoQueryString(
  name: string = "q",
  isArray: boolean = false
) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [value, setValue] = useState<Set<string> | string>(
    isArray
      ? new Set([...searchParams.getAll(name)])
      : searchParams.get(name) || ""
  );

  const handleSearch = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (value instanceof Set) {
      params.delete(name); // make sure no duplicates
      value.forEach((val) => params.append(name, val));
    } else {
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  function modifyValue(newVal: string) {
    setValue((prevVal) => {
      // if the user want to allows an array for the query param
      if (prevVal instanceof Set) {
        // if the value is already in the query string, remove it
        if ((value as Set<string>).has(newVal)) {
          prevVal.delete(newVal);
          return new Set(prevVal);
        }

        // add value to the query string
        return new Set(prevVal.add(newVal));
      } else {
        return newVal;
      }
    });
  }

  // keep calling search input whenever the user types
  useEffect(() => {
    handleSearch();
  }, [handleSearch, value]);

  return [value, modifyValue] as const;
}
