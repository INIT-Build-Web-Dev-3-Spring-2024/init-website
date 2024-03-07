// "use client";

import { programs } from "./programData";
import { ProgramCard } from "./components/ProgramCard";

export default function Programs() {
  return (
    <main className="mx-auto bg-gray-800/90 min-h-screen max-w-7xl p-4 px-8 md:p-0 md:px-8">
      <div className="mb-4 flex flex-col items-center justify-between md:mb-0 md:flex-row">
        <h1 className="mb-4 text-2xl text-white md:mb-0 md:text-3xl">
          Programs
        </h1>
      </div>
      <div className=" grid gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
    {programs.map((program, index) => (
        <ProgramCard key={index} program={program} />
    ))}
</div>
    </main>
  );
}
