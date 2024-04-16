import EventCard from "@/components/EventCard";
import { AnimatedTitle, Title } from "@/components/Title";
import fetchEvents from "../../lib/fetchEvents";
import InputAndFilters from "@/components/InputAndFilters";
import ProgramSelector from "./ProgramSelector";
import { Suspense } from "react";

export interface eventSearchProperties {
  q?: string;
  Program?: string;
  Location?: string;
  program?: string;
}

interface eventsSearchParams {
  searchParams: eventSearchProperties;
}

export default async function page({ searchParams }: eventsSearchParams) {
  const events = await fetchEvents(searchParams, true);

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-5 sm:px-16 py-12 bg-opacity-95">
      <header>
        <Title className="leading-tight">
          Discover and Join Our <br />
          Upcoming
          <AnimatedTitle> Events</AnimatedTitle>
        </Title>
      </header>

      <div className="w-4/5 mx-auto my-10">
        <Suspense>
          <InputAndFilters
            name="q"
            placeholder="Search Events"
            filters={[
              {
                name: "Location",
                options: ["PG6", "GC", "CASE"],
              },
            ]}
          />
        </Suspense>
      </div>

      <Suspense>
        <ProgramSelector />
      </Suspense>

      <div className="mx-auto">
        <div className="grid gap-6 mx-auto">
          {events && events.length === 0 ? (
            <p className="text-3xl font-extrabold flex relative justify-center">
              There are currently no events for this selection
            </p>
          ) : (
            events &&
            events.map((event) => <EventCard key={event.id} {...event} />)
          )}
        </div>
      </div>
    </div>
  );
}
