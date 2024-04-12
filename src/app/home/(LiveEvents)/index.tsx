"use client";

import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { Event } from "@/components/EventCard";
import EventSlideshow from "./EventSlideshow";
import NextEvent from "./NextEvent";
import { twMerge } from "tailwind-merge";

interface LiveEventsParentProps {
  events: Event[] | undefined;
}

const LiveEventsParent = (props: LiveEventsParentProps) => {
  const defaultEvent: Event[] = [
    {
      id: "999",
      name: "There are currently no upcoming events, check again later!",
      rsvpLink: "https://www.weareinit.org/",
      date: "TBD",
      time: "TBD",
      picture: "/images/icons/notionDefaultImage.jpeg",
      location: "",
      program: "",
      description:
        "In the meantime check out our discord to connect with other members from our community. Check back later for more exciting events!",
      dateEnd: "",
      timeEnd: "",
    },
  ];

  // show default event if events props is empty
  const eventsToShow =
    props.events && props.events.length > 0 ? props.events : defaultEvent;

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const [QRSrc, setQRSrc] = useState("");

  useEffect(() => {
    const currentEvent = eventsToShow[currentEventIndex];
    const checkIfEventIsLive = (event: Event) => {
      const startTime = new Date(`${event.date} ${event.time}`).getTime();
      const endTime = new Date(`${event.dateEnd} ${event.timeEnd}`).getTime();
      const currentTime = new Date().getTime();
      return currentTime >= startTime && currentTime <= endTime;
    };

    setIsLive(checkIfEventIsLive(currentEvent));

    // generate QR code
    if (currentEvent.rsvpLink) {
      QRCode.toDataURL(currentEvent.rsvpLink).then(setQRSrc);
    } else {
      QRCode.toDataURL("https://www.weareinit.org/").then(setQRSrc);
    }
  }, [currentEventIndex, eventsToShow]);

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % eventsToShow.length);
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + eventsToShow.length) % eventsToShow.length
    );
  };

  const nextEventIndex = (currentEventIndex + 1) % eventsToShow.length;
  const nextEvent = eventsToShow[nextEventIndex];

  return (
    <div className="relative mb-20">
      <EventSlideshow
        currentEvent={eventsToShow[currentEventIndex]}
        isLive={isLive}
        onPrevious={handlePreviousEvent}
        QRImage={QRSrc}
      />

      {eventsToShow.length > 1 && (
        <NextEvent
          title={nextEvent?.name || "No upcoming event"}
          description={nextEvent?.description || ""}
          onNext={handleNextEvent}
        />
      )}

      <div
        className={twMerge(
          "absolute -top-3/4 left-0 h-[200%] w-full -z-50",
          "bg-gradient-radial from-secondary-yellow/30 to-transparent to-65%"
        )}
      />
    </div>
  );
};

export default LiveEventsParent;
