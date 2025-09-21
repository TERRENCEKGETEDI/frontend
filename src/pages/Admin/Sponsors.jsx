import React from 'react';
import Button from '../../components/ui/Button';
import { mockSponsors } from '../../data/mockData';

const Sponsors = () => {
  const pendingSponsors = mockSponsors;

  const handleApprove = (id) => {
    alert(`Approved sponsor ${id}`);
  };

  const handleReject = (id) => {
    alert(`Rejected sponsor ${id}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Sponsors</h1>
      <div className="space-y-4">
        {pendingSponsors.map(sponsor => (
          <div key={sponsor.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
            <div>
              <p className="font-bold">{sponsor.company}</p>
              <p>Contact: {sponsor.contact}</p>
              <p>Level: {sponsor.level}</p>
            </div>
            <div className="space-x-2">
              <Button onClick={() => handleApprove(sponsor.id)}>Approve</Button>
              <Button onClick={() => handleReject(sponsor.id)} variant="secondary">Reject</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;