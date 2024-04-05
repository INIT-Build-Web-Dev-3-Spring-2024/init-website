"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { useSearchParams } from "next/navigation";

export interface SearchProps {
  searchType: string;
}

export default function SearchInput({ searchType }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams()

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const jobType = searchParams.has('jobType') ? searchParams.get('jobType')! : "";
    const positionType = searchParams.has('positionType') ? searchParams.get('positionType')! : "";
    const jobLocation = searchParams.has('jobLocation') ? searchParams.get('jobLocation')! : "";

    let query = `/${searchType}s?q=${encodeURI(searchQuery)}`;

    if(jobType.length > 0){
			query += (`&jobType=${encodeURI(jobType)}`);
		}

    if(positionType.length > 0){
			query += (`&positionType=${encodeURI(positionType)}`);
		}

    if(jobLocation.length > 0){
			query += (`&jobLocation=${encodeURI(jobLocation)}`);
		}

    router.push(query);

    setSearchQuery(""); // Clears search bar after user submits
  };

  return (
    <form id="search-jobs" onSubmit={onSearch}>
      <label
        htmlFor={`search-${searchType}-input-field`}
        className="sr-only text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          id={`search-${searchType}-input-field`}
          className="border-yellow_primary block w-full rounded-md border bg-white p-3 pl-10 text-sm text-gray-900 focus:border-primary_yellow focus:ring-primary_yellow md:w-[400px] focus:outline-none"
          autoComplete="off"
          placeholder={`Search ${searchType}s...`}
          required
        />
        <Button
          className="absolute right-0 top-0 rounded-l-none inset-y-0"
          type="submit"
          onClick={() => {}}
        >
          Search
        </Button>
      </div>
    </form>
  );
}