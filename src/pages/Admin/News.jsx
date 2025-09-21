import React, { useState, useEffect } from 'react';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { getNews, createNews, updateNews, deleteNews } from '../../services/newsService';

const News = () => {
  const [news, setNews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({ title: '', content: '', author: 'Admin' });

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const newsData = await getNews();
      setNews(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNews) {
        await updateNews(editingNews.id, formData);
      } else {
        await createNews(formData);
      }
      fetchNews();
      setShowModal(false);
      setFormData({ title: '', content: '', author: 'Admin' });
      setEditingNews(null);
    } catch (error) {
      console.error('Error saving news:', error);
    }
  };

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
    setFormData({ title: newsItem.title, content: newsItem.content, author: newsItem.author });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this news?')) {
      try {
        await deleteNews(id);
        fetchNews();
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    }
  };

  const openCreateModal = () => {
    setEditingNews(null);
    setFormData({ title: '', content: '', author: 'Admin' });
    setShowModal(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage News</h1>
      <Button onClick={openCreateModal} className="mb-4">Add News</Button>
      <div className="space-y-4">
        {news.map(item => (
          <div key={item.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.date} by {item.author}</p>
            </div>
            <div className="space-x-2">
              <Button onClick={() => handleEdit(item)} variant="secondary">Edit</Button>
              <Button onClick={() => handleDelete(item.id)} variant="danger">Delete</Button>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-bold mb-4">{editingNews ? 'Edit News' : 'Add News'}</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              className="w-full p-2 border rounded"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows="6"
              required
            />
          </div>
          <Input
            label="Author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            required
          />
          <Button type="submit">{editingNews ? 'Update' : 'Create'}</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default News;