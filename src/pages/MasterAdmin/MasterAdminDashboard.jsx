import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../state/AuthContext';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import { getMembers, updateMember, deleteMember, blockMember } from '../../services/memberService';
import { getEvents, deleteEvent } from '../../services/eventService';
import { getNews, deleteNews } from '../../services/newsService';
import { getResources, deleteResource } from '../../services/resourceService';

const MasterAdminDashboard = () => {
  const { isMasterAdmin } = useAuthContext();
  const [activeTab, setActiveTab] = useState('overview');
  const [members, setMembers] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [resources, setResources] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [bulkAction, setBulkAction] = useState('');

  useEffect(() => {
    if (isMasterAdmin()) {
      loadAllData();
    }
  }, [isMasterAdmin]);

  const loadAllData = async () => {
    try {
      const [membersData, eventsData, newsData, resourcesData] = await Promise.all([
        getMembers(),
        getEvents(),
        getNews(),
        getResources()
      ]);
      setMembers(membersData);
      setEvents(eventsData);
      setNews(newsData);
      setResources(resourcesData);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleBulkAction = async () => {
    if (!bulkAction || selectedItems.length === 0) return;

    try {
      switch (bulkAction) {
        case 'delete_members':
          await Promise.all(selectedItems.map(id => deleteMember(id)));
          break;
        case 'block_members':
          await Promise.all(selectedItems.map(id => blockMember(id)));
          break;
        case 'delete_events':
          await Promise.all(selectedItems.map(id => deleteEvent(id)));
          break;
        case 'delete_news':
          await Promise.all(selectedItems.map(id => deleteNews(id)));
          break;
        case 'delete_resources':
          await Promise.all(selectedItems.map(id => deleteResource(id)));
          break;
      }
      loadAllData();
      setSelectedItems([]);
      setBulkAction('');
      alert('Bulk action completed successfully');
    } catch (error) {
      console.error('Bulk action failed:', error);
      alert('Bulk action failed');
    }
  };

  const toggleSelection = (id) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const selectAll = (items, type) => {
    const allIds = items.map(item => item.id);
    setSelectedItems(allIds);
    setModalType(type);
    setShowModal(true);
  };

  if (!isMasterAdmin()) {
    return <div className="text-center py-10">Access Denied: Master Admin Only</div>;
  }

  return (
    <div className="master-admin-dashboard">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary-color mb-2">Master Admin Dashboard</h1>
        <p className="text-gray-600">Complete system administration and bulk operations</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {['overview', 'members', 'events', 'news', 'resources'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === tab
                ? 'bg-white text-primary-color shadow-sm'
                : 'text-gray-600 hover:text-primary-color'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card text-center">
            <h3 className="text-2xl font-bold text-primary-color">{members.length}</h3>
            <p className="text-gray-600">Total Members</p>
          </div>
          <div className="card text-center">
            <h3 className="text-2xl font-bold text-accent-color">{events.length}</h3>
            <p className="text-gray-600">Total Events</p>
          </div>
          <div className="card text-center">
            <h3 className="text-2xl font-bold text-success-color">{news.length}</h3>
            <p className="text-gray-600">News Articles</p>
          </div>
          <div className="card text-center">
            <h3 className="text-2xl font-bold text-warning-color">{resources.length}</h3>
            <p className="text-gray-600">Resources</p>
          </div>
        </div>
      )}

      {/* Members Tab */}
      {activeTab === 'members' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Member Management</h2>
            <div className="flex space-x-2">
              <Button onClick={() => selectAll(members, 'members')} variant="secondary">
                Select All Members
              </Button>
              {selectedItems.length > 0 && (
                <div className="flex space-x-2">
                  <select
                    value={bulkAction}
                    onChange={(e) => setBulkAction(e.target.value)}
                    className="px-3 py-2 border rounded"
                  >
                    <option value="">Choose Action</option>
                    <option value="block_members">Block Selected</option>
                    <option value="delete_members">Delete Selected</option>
                  </select>
                  <Button onClick={handleBulkAction} variant="danger">
                    Apply ({selectedItems.length})
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            {members.map(member => (
              <div key={member.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(member.id)}
                  onChange={() => toggleSelection(member.id)}
                  className="w-4 h-4"
                />
                <div className="flex-1">
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.email} | {member.branch} | {member.becRole}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  member.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  member.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  member.status === 'Alumni' ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {member.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Event Management</h2>
            <div className="flex space-x-2">
              <Button onClick={() => selectAll(events, 'events')} variant="secondary">
                Select All Events
              </Button>
              {selectedItems.length > 0 && (
                <div className="flex space-x-2">
                  <select
                    value={bulkAction}
                    onChange={(e) => setBulkAction(e.target.value)}
                    className="px-3 py-2 border rounded"
                  >
                    <option value="">Choose Action</option>
                    <option value="delete_events">Delete Selected</option>
                  </select>
                  <Button onClick={handleBulkAction} variant="danger">
                    Apply ({selectedItems.length})
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            {events.map(event => (
              <div key={event.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(event.id)}
                  onChange={() => toggleSelection(event.id)}
                  className="w-4 h-4"
                />
                <div className="flex-1">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.date} | {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* News Tab */}
      {activeTab === 'news' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">News Management</h2>
            <div className="flex space-x-2">
              <Button onClick={() => selectAll(news, 'news')} variant="secondary">
                Select All News
              </Button>
              {selectedItems.length > 0 && (
                <div className="flex space-x-2">
                  <select
                    value={bulkAction}
                    onChange={(e) => setBulkAction(e.target.value)}
                    className="px-3 py-2 border rounded"
                  >
                    <option value="">Choose Action</option>
                    <option value="delete_news">Delete Selected</option>
                  </select>
                  <Button onClick={handleBulkAction} variant="danger">
                    Apply ({selectedItems.length})
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            {news.map(item => (
              <div key={item.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelection(item.id)}
                  className="w-4 h-4"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.date} | {item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === 'resources' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Resource Management</h2>
            <div className="flex space-x-2">
              <Button onClick={() => selectAll(resources, 'resources')} variant="secondary">
                Select All Resources
              </Button>
              {selectedItems.length > 0 && (
                <div className="flex space-x-2">
                  <select
                    value={bulkAction}
                    onChange={(e) => setBulkAction(e.target.value)}
                    className="px-3 py-2 border rounded"
                  >
                    <option value="">Choose Action</option>
                    <option value="delete_resources">Delete Selected</option>
                  </select>
                  <Button onClick={handleBulkAction} variant="danger">
                    Apply ({selectedItems.length})
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            {resources.map(resource => (
              <div key={resource.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(resource.id)}
                  onChange={() => toggleSelection(resource.id)}
                  className="w-4 h-4"
                />
                <div className="flex-1">
                  <p className="font-medium">{resource.title}</p>
                  <p className="text-sm text-gray-600">{resource.type} | {resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bulk Action Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-bold mb-4">Confirm Bulk Action</h2>
        <p className="mb-4">
          Are you sure you want to {bulkAction.replace('_', ' ')} {selectedItems.length} selected {modalType}?
        </p>
        <div className="flex space-x-2">
          <Button onClick={() => { handleBulkAction(); setShowModal(false); }} variant="danger">
            Confirm
          </Button>
          <Button onClick={() => setShowModal(false)} variant="secondary">
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default MasterAdminDashboard;