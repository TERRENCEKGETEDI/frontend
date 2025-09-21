import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/ui/Button';

const ResourceDetails = () => {
  const { id } = useParams();
  // Mock resource data
  const resource = {
    id,
    title: 'Past Paper 1',
    type: 'PDF',
    description: 'Math past paper.',
    url: '#', // Mock URL
  };

  const handleDownload = () => {
    alert('Downloading...');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
      <p className="text-lg mb-2"><strong>Type:</strong> {resource.type}</p>
      <p className="mb-4">{resource.description}</p>
      <Button onClick={handleDownload}>Download</Button>
    </div>
  );
};

export default ResourceDetails;