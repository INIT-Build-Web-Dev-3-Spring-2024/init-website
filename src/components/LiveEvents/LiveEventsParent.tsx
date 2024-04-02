import React, { useState, useEffect, useMemo } from 'react';
import EventSlideshow from './EventSlideshow';
import NextEvent from './NextEvent';
import { Event } from '../EventCard';

const LiveEventsParent = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isLive, setIsLive] = useState(false);
  // dummy data for tsting
  const slides = useMemo(
    () => [
      {
        id: '1',
        name: 'Artificial Intelligence + Machine Learning workshop',
        rsvpLink: '',
        date: 'Tue, April 2',
        time: '6:00 PM EDT',
        picture: '',
        location: 'GC',
        program: 'Build',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        dateEnd: 'Tue, April 2, 2024',
        timeEnd: '9:00 PM EDT',
      },

      {
        id: '2',
        name: 'Detecting Color using Computer Vision',
        rsvpLink: '',
        date: '04/15/2024',
        time: '10:00 AM',
        picture: '/assets/images/default2notion.avif',
        location: 'Virtual',
        program: 'Explore',
        description:
          'Explore Computer Vision and learn how to program a robot car to identify objects and behaviors using color detection in this workshop!',
        dateEnd: '04/15/2024',
        timeEnd: '3:00 PM',
      },
      {
        id: '4fc329cf-2b49-4976-aa15-75f84a7ce4e1',
        name: 'test',
        description: '',
        picture: '/assets/images/eventDefaultImage.avif',
        location: 'Location TBD',
        program: 'General',
        date: 'Tue, April 2, 2024',
        dateEnd: 'Tue, April 2, 2024',
        time: '6:00 PM EDT',
        timeEnd: '9:00 PM EDT',
        rsvpLink: '',
      },
    ],
    []
  );

  useEffect(() => {
    const currentEvent = slides[currentEventIndex];
    // check if the current event is live
    const checkIfEventIsLive = (event: Event) => {
      const startTime = new Date(`${event.date} ${event.time}`).getTime();
      const endTime = new Date(`${event.dateEnd} ${event.timeEnd}`).getTime();
      const currentTime = new Date().getTime();

      return currentTime >= startTime && currentTime <= endTime;
    };

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
    <div>
      <EventSlideshow
        currentEvent={slides[currentEventIndex]}
        isLive={isLive}
        onNext={handleNextEvent}
        onPrevious={handlePreviousEvent}
      />
      <NextEvent title={nextEvent.name} description={nextEvent.description} />
    </div>
  );
};

export default LiveEventsParent;
