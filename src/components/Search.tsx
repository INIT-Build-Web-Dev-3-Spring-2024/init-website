"use client";

import SearchLogo from "@/images/icons/searchLogo.svg";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput({
  searchType = "",
}: {
  searchType: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      <div className="w-full md:w-auto">
        <label
          htmlFor={`search-${searchType}-input-field`}
          className="sr-only text-sm font-medium text-gray-900"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchLogo className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="search"
            className="border-yellow_primary block w-full rounded-md border bg-white p-3 pl-10 text-sm text-gray-900 focus:border-primary_yellow focus:ring-primary_yellow md:w-[400px]"
            id={`search-${searchType}-input-field`}
            placeholder={`Search ${searchType}`}
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
            required
          />
        </div>
      </div>
    </>
  );
}
