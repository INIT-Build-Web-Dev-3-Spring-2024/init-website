"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function useAutoQueryString(name: string = "q") {
  const [value, setValue] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    router.push(`${pathname}?${params}`);
  }, 300);

  // get the initial value of the input on load
  useEffect(() => {
    const initialValue = searchParams.get(name) || "";
    setValue(initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keep calling search input whenever the user types
  useEffect(() => {
    handleSearch();
  }, [handleSearch, value]);

  return [value, setValue] as const;
}
