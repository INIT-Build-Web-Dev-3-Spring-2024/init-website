import React, { useState, useEffect, useMemo } from "react";
import EventSlideshow from "./EventSlideshow";
import NextEvent from "./NextEvent";
import { Event } from "../../../components/EventCard";
import QRCode from "qrcode";
import fetchEvents from "@/app/lib/fetchEvents";

const LiveEventsParent = () => {
  const defaultEvent = useMemo(
    () => [
      {
        id: "999",
        name: "There are currently no upcoming events, check again later!",
        rsvpLink: "https://www.weareinit.org/",
        date: "TBD",
        time: "TBD",
        picture: "/assets/images/notionDefaultImage.jpeg",
        location: "",
        program: "",
        description:
          "In the meantime check out our discord to connect with other members from our community. Check back later for more exciting events!",
        dateEnd: "",
        timeEnd: "",
      },
    ],
    []
  );

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const [QRSrc, setQRSrc] = useState("");
  const [slides, setSlides] = useState(defaultEvent);
  // dummy data for tsting
  // const slides: Event[] = useMemo(
  //   () => [
  //     {
  //       id: '1',
  //       name: 'Artificial Intelligence + Machine Learning workshop',
  //       rsvpLink: 'https://github.com/WriteCodeRAM',
  //       date: 'Thursday, April 4',
  //       time: '4:00 PM EDT',
  //       picture: '',
  //       location: 'GC',
  //       program: 'Build',
  //       description:
  //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //       dateEnd: 'Thursday, April 4, 2024',
  //       timeEnd: '6:05 PM EDT',
  //     },

  //     {
  //       id: '2',
  //       name: 'Detecting Color using Computer Vision',
  //       rsvpLink: '',
  //       date: '04/15/2024',
  //       time: '10:00 AM',
  //       picture: '/assets/images/default2notion.avif',
  //       location: 'Virtual',
  //       program: 'Explore',
  //       description:
  //         'Explore Computer Vision and learn how to program a robot car to identify objects and behaviors using color detection in this workshop!',
  //       dateEnd: '04/15/2024',
  //       timeEnd: '3:00 PM',
  //     },
  //
  //   []
  // );

  useEffect(() => {
    const loadEvents = async () => {
      try {
        console.log("inside first useEffect");
        const fetchedEvents = await fetchEvents();
        console.log(fetchedEvents);
        // use events from notion if available else default event
        if (fetchedEvents && fetchedEvents.length > 0) {
          setSlides(fetchedEvents);
        } else {
          setSlides(defaultEvent);
        }
      } catch (error) {
        console.error("Error fetching events: ", error);
        setSlides(defaultEvent);
      }
    };

    loadEvents();
  }, [defaultEvent]);

  useEffect(() => {
    const currentEvent = slides[currentEventIndex];
    // check if the current event is live
    const checkIfEventIsLive = (event: Event) => {
      const startTime = new Date(`${event.date} ${event.time}`).getTime();
      const endTime = new Date(`${event.dateEnd} ${event.timeEnd}`).getTime();
      const currentTime = new Date().getTime();

      return currentTime >= startTime && currentTime <= endTime;
    };

    const generateQRCode = () => {
      if (currentEvent.rsvpLink) {
        QRCode.toDataURL(slides[currentEventIndex].rsvpLink).then(setQRSrc);
      } else {
        QRCode.toDataURL("https://www.weareinit.org/").then(setQRSrc);
      }
    };

    generateQRCode();
    setIsLive(checkIfEventIsLive(currentEvent));
  }, [currentEventIndex, slides]);

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextEventIndex = (currentEventIndex + 1) % slides.length;
  const nextEvent = slides[nextEventIndex];

  return (
    <div className="relative">
      <EventSlideshow
        currentEvent={slides[currentEventIndex]}
        isLive={isLive}
        onPrevious={handlePreviousEvent}
        QRImage={QRSrc}
      />

      {slides.length > 1 && (
        <NextEvent
          title={slides[nextEventIndex]?.name || "No upcoming event"}
          description={slides[nextEventIndex]?.description || ""}
          onNext={handleNextEvent}
        />
      )}
    </div>
  );
};

export default LiveEventsParent;
