import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/ui/Button';

const EventDetails = () => {
  const { id } = useParams();
  // Mock event data
  const event = {
    id,
    title: 'Tech Workshop',
    date: '2023-10-01',
    description: 'Learn about new technologies.',
    location: 'Online',
    time: '10:00 AM',
  };

  const handleRSVP = () => {
    alert('RSVP confirmed');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-lg mb-2"><strong>Date:</strong> {event.date}</p>
      <p className="text-lg mb-2"><strong>Time:</strong> {event.time}</p>
      <p className="text-lg mb-2"><strong>Location:</strong> {event.location}</p>
      <p className="mb-4">{event.description}</p>
      <Button onClick={handleRSVP}>RSVP</Button>
    </div>
  );
};

export default EventDetails;