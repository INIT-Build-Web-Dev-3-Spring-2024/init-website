"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

export function useLocalStorage(key: string) {
  const [value, setValue] = useState<string | null>(null);

  const handleStorageChange = useCallback(() => {
    setValue(window.localStorage.getItem(key));
  }, [key]);

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);

    // make sure that the local storage get ran on load
    window.dispatchEvent(new Event("storage"));

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [handleStorageChange, key]);

  function modifyLocalStorage(value: string) {
    window.localStorage.setItem(key, value);
    window.dispatchEvent(new Event("storage"));
  }

  return [value, modifyLocalStorage] as const;
}
