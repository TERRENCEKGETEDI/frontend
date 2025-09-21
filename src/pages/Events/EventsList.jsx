import React from 'react';
import EventCard from '../../components/cards/EventCard';
import { mockEvents } from '../../data/mockData';

const EventsList = () => {
  const events = mockEvents;

  const handleRSVP = (id) => {
    alert(`RSVP for event ${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} onRSVP={handleRSVP} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;