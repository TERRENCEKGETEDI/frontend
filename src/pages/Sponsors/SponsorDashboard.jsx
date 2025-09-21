import React from 'react';

const SponsorDashboard = () => {
  // Mock data
  const support = {
    level: 'Gold',
    eventsSponsored: 2,
    benefits: ['Logo on website', 'Booth at events'],
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sponsor Dashboard</h1>
      <p className="text-lg mb-2"><strong>Sponsorship Level:</strong> {support.level}</p>
      <p className="text-lg mb-2"><strong>Events Sponsored:</strong> {support.eventsSponsored}</p>
      <h2 className="text-2xl font-bold mb-2">Benefits</h2>
      <ul className="list-disc list-inside">
        {support.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default SponsorDashboard;