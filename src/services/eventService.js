// Mock event service
import { mockEvents } from '../data/mockData';

export const getEvents = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 500);
  });
};

export const rsvpEvent = async (eventId) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};

export const createEvent = async (eventData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newEvent = { ...eventData, id: mockEvents.length + 1 };
      mockEvents.push(newEvent);
      resolve({ success: true, event: newEvent });
    }, 500);
  });
};

export const updateEvent = async (id, eventData) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockEvents.findIndex(event => event.id === id);
      if (index !== -1) {
        mockEvents[index] = { ...mockEvents[index], ...eventData };
        resolve({ success: true, event: mockEvents[index] });
      } else {
        reject(new Error('Event not found'));
      }
    }, 500);
  });
};

export const deleteEvent = async (id) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockEvents.findIndex(event => event.id === id);
      if (index !== -1) {
        mockEvents.splice(index, 1);
        resolve({ success: true });
      } else {
        reject(new Error('Event not found'));
      }
    }, 500);
  });
};