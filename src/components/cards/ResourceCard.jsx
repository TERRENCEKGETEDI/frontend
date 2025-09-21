import React from 'react';
import Button from '../ui/Button';

const ResourceCard = ({ resource, onDownload }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{resource.type}</p>
      <p className="mb-4">{resource.description}</p>
      <Button onClick={() => onDownload(resource.id)}>Download</Button>
    </div>
  );
};

export default ResourceCard;