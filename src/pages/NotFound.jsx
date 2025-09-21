import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded">Go Home</Link>
    </div>
  );
};

export default NotFound;