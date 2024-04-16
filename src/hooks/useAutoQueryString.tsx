"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type Options = Partial<{
  isArray: boolean;
  debounce: number;
}>;

export type SingleVal = [string, (val: string) => void];
export type MultiVal = [Set<string>, (val: string) => void];

export default function useAutoQueryString(
  name: string = "q",
  options?: Options
) {
  const { isArray = false, debounce = 300 } = options || {};

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
  }, debounce);

  function modifyValue(newVal: string) {
    setValue((prevVal) => {
      // if the user want to allows an array for the query param
      if (prevVal instanceof Set) {
        const newSet = new Set(prevVal);

        // if the value is already in the set, remove it, else add it
        if (newSet.has(newVal)) {
          newSet.delete(newVal);
        } else {
          newSet.add(newVal);
        }

        return newSet;
      } else {
        // if prevVal is not a Set, just return the newVal
        return newVal;
      }
    });
  }

  // keep calling search input whenever the user types
  useEffect(() => {
    handleSearch();
  }, [handleSearch, value, searchParams]);

  return [value, modifyValue] as const;
}
