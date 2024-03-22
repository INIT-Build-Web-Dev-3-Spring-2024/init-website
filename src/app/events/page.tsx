import EventCard, { Event } from "@/components/EventCard";
import fetchEvents from "../lib/fetchEvents";

export default async function page() {
  const events = await fetchEvents(true);

  return (
    <main className="bg-zinc-900 min-h-screen px-16 py-12 bg-opacity-95">
      <h1 className="text-4xl font-bold mb-3 text-white">Upcoming events</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto mt-8">
        {events?.map((event) => (
          <EventCard key={event.id} {...event}></EventCard>
        ))}
      </div>
    </main>
  );
}
