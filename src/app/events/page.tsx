import EventCard, { Event } from "@/components/EventCard";

export default function page() {
  const events: Event[] = [
    {
      id: 1,
      name: "Interview Prep: Graphs",
      description:
        "Learn about the fundamentals of graphs to prepare for technical interviews!",
      location: "CBC 155",
      picture:
        "https://res.cloudinary.com/dh6y8bufo/image/upload/v1699911150/init-dashboard/events/Interview%20Prep%20Image.avif",
      program: "Reach",
      rsvpLink: "https://lu.ma/p31somhk",
      time: new Date("2023-11-08T21:00:00.000Z"),
    },
    {
      id: 2,
      name: "Design: Build a Portfolio",
      description:
        "Learn to create projects for your portfolio and gain UI/UX experience!",
      location: "CASE 132",
      picture:
        "https://res.cloudinary.com/dh6y8bufo/image/upload/v1699914651/init-dashboard/events/Mock%20Interview.jpg",
      program: "Explore",
      rsvpLink: "https://lu.ma/pzc4g76u",
      time: new Date("2023-10-26T20:00:00.000Z"), //this would be pulled from notion as a time?
    },
  ];

  return (
    <>
      {" "}
      <div className="mx-auto mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard {...event}></EventCard>
          ))}
        </div>
      </div>
    </>
  );
}
