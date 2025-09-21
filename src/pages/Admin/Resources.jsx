import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import { getResources, updateResource, deleteResource } from '../../services/resourceService';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingResource, setEditingResource] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '', type: '', url: '#' });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const resourcesData = await getResources();
      setResources(resourcesData);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const handleEdit = (resource) => {
    setEditingResource(resource);
    setFormData({
      title: resource.title,
      description: resource.description,
      type: resource.type,
      url: resource.url
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      try {
        await deleteResource(id);
        fetchResources();
      } catch (error) {
        console.error('Error deleting resource:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateResource(editingResource.id, formData);
      fetchResources();
      setShowModal(false);
      setEditingResource(null);
      setFormData({ title: '', description: '', type: '', url: '#' });
    } catch (error) {
      console.error('Error updating resource:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Resources</h1>
      <div className="space-y-4">
        {resources.map(resource => (
          <div key={resource.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
            <div>
              <p className="font-bold">{resource.title}</p>
              <p className="text-sm text-gray-600">{resource.type} - {resource.description}</p>
            </div>
            <div className="space-x-2">
              <Button onClick={() => handleEdit(resource)} variant="secondary">Edit</Button>
              <Button onClick={() => handleDelete(resource.id)} variant="danger">Delete</Button>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-bold mb-4">Edit Resource</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <Input
            label="Type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
          />
          <Input
            label="URL"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="3"
            />
          </div>
          <Button type="submit">Update</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Resources;