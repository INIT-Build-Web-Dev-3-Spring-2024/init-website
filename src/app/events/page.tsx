import EventCard from "@/components/EventCard";
import { AnimatedTitle, Title } from "@/components/Title";
import fetchEvents from "../lib/fetchEvents";
import InputAndFilters from "@/components/InputAndFilters";

interface PageProps {
  searchParams?: { q?: string };
}

export default async function page({ searchParams }: PageProps) {
  const query = searchParams?.q || "";
  const events = await fetchEvents(query, true);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 sm:px-16 py-12 bg-opacity-95">
      <header>
        <Title>
          Discover and Join Our <br />
          Upcoming
          <AnimatedTitle> Events</AnimatedTitle>
        </Title>
      </header>

      <div className="w-4/5 mx-auto my-16">
        <InputAndFilters
          name="q"
          placeholder="Search Events"
          filters={[
            {
              name: "Program",
              options: ["Explore", "Reach", "Build", "General", "Other"],
            },
            {
              name: "Location",
              options: ["PG6", "GC", "CASE", "Other"],
            },
          ]}
        />
      </div>

      <div className="mx-auto mt-8">
        <div className="grid gap-6 mx-auto mt-8">
          {events?.map((event) => (
            <EventCard key={event.id} {...event}></EventCard>
          ))}
        </div>
      </div>
    </main>
  );
}
