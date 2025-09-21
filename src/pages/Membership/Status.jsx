import React from 'react';

const Status = () => {
  // Mock status
  const status = 'Pending'; // Could be 'Approved', 'Rejected', 'Pending'

  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Application Status</h1>
      <p className={`text-lg ${status === 'Approved' ? 'text-green-600' : status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
        Your application is {status}.
      </p>
    </div>
  );
};

export default Status;