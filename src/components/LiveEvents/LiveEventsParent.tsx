import React, { useState } from 'react';
import EventSlideshow from './EventSlideshow';
import NextEvent from './NextEvent';
import { Event } from '../EventCard';

const LiveEventsParent = () => {
  // isLive boolean
  const slides: Event[] = [
    {
      id: '1',
      name: 'Artificial Intelligence + Machine Learning workshop',
      rsvpLink: '',
      date: 'April 2 2024',
      time: '3:00pm',
      picture: '',
      location: 'GC',
      program: 'Build',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

    {
      id: '2',
      name: 'Detecting Color using Computer Vision',
      rsvpLink: '',
      date: '04/15/2024',
      time: '10:00 AM - 3:00 PM',
      picture: '/assets/images/default2notion.avif',
      location: 'Virtual',
      program: 'Explore',
      description:
        'Explore Computer Vision and learn how to program a robot car to identify objects and behaviors using color detection in this workshop!',
    },
    {
      id: '3',
      name: 'Weekly Interview Prep: Dynamic Programming',
      rsvpLink: '',
      date: '06/10/2024',
      time: '9:00 AM - 12:00 PM',
      picture: '/assets/images/eventDefaultImage.avif',
      location: 'ACH5 - Room 201',
      program: 'PG6 Room 115',
      description:
        'Join our weekly beginner-friendly interview prep session, focusing this week on Dynamic Programming. Practice your problem-solving skills to ace your next technical interview!',
    },
  ];
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePreviousEvent = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextEventIndex = (currentEventIndex + 1) % slides.length;
  // isLive boolean ?

  // dummy data for tsting

  return (
    <div>
      <EventSlideshow
        currentEvent={slides[currentEventIndex]}
        onNext={handleNextEvent}
        onPrevious={handlePreviousEvent}
      />
      <NextEvent
        title={slides[nextEventIndex].name}
        description={slides[nextEventIndex].description}
      />
    </div>
  );
};

export default LiveEventsParent;
