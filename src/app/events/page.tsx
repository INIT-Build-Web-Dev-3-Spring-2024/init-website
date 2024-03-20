import EventCard, { Event } from "@/components/EventCard";
import fetchEvents from "../lib/fetchEvents";

export default async function page() {
  const events = await fetchEvents(true);

  return (
    <>
      {" "}
      <div className="mx-auto mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {events?.map((event) => (
            <EventCard key={event.id} {...event}></EventCard>
          ))}
        </div>
      </div>
    </>
  );
}
