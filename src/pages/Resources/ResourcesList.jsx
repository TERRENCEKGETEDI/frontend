import React, { useState } from 'react';
import ResourceCard from '../../components/cards/ResourceCard';
import { mockResources } from '../../data/mockData';

const ResourcesList = () => {
  const [search, setSearch] = useState('');
  const resources = mockResources;

  const filteredResources = resources.filter(r => r.title.toLowerCase().includes(search.toLowerCase()));

  const handleDownload = (id) => {
    alert(`Downloading resource ${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
      <input
        type="text"
        placeholder="Search resources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} onDownload={handleDownload} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesList;