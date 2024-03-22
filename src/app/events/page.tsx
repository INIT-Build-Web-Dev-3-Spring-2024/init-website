import EventCard, { Event } from "@/components/EventCard";
import fetchEvents from "../lib/fetchEvents";
import SearchInput from "@/components/Search";

export default async function page({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || "";
  const events = await fetchEvents(query, true);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-16 py-12 bg-opacity-95">
      <div className="ordered mb-4 flex flex-col items-center justify-between md:mb-0 md:flex-row">
        <h1 className="text-4xl font-bold mb-3">Upcoming events</h1>
        <div className="flex w-full flex-col items-center space-y-4 md:w-auto md:flex-row md:space-x-5 md:space-y-0">
          <SearchInput searchType="event"></SearchInput>
        </div>
      </div>
      <div className="mx-auto mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto mt-8">
          {events?.map((event) => (
            <EventCard key={event.id} {...event}></EventCard>
          ))}
        </div>
      </div>
    </main>
  );
}
