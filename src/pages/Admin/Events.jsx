import React, { useState, useEffect } from 'react';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../../services/eventService';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({ title: '', date: '', description: '', location: '', time: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const eventsData = await getEvents();
      setEvents(eventsData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingEvent) {
        await updateEvent(editingEvent.id, formData);
      } else {
        await createEvent(formData);
      }
      fetchEvents();
      setShowModal(false);
      setFormData({ title: '', date: '', description: '', location: '', time: '' });
      setEditingEvent(null);
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      description: event.description || '',
      location: event.location || '',
      time: event.time || ''
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await deleteEvent(id);
        fetchEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const openCreateModal = () => {
    setEditingEvent(null);
    setFormData({ title: '', date: '', description: '', location: '', time: '' });
    setShowModal(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Events</h1>
      <Button onClick={openCreateModal} className="mb-4">Add Event</Button>
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
            <div>
              <h3 className="font-bold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
              <p className="text-sm">{event.location}</p>
            </div>
            <div className="space-x-2">
              <Button onClick={() => handleEdit(event)} variant="secondary">Edit</Button>
              <Button onClick={() => handleDelete(event.id)} variant="danger">Delete</Button>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-bold mb-4">{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <Input
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
          <Input
            label="Time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
          <Input
            label="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="4"
            />
          </div>
          <Button type="submit">{editingEvent ? 'Update' : 'Create'}</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Events;