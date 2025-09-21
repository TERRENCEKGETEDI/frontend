import React from 'react';

const SponsorCard = ({ sponsor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{sponsor.level}</p>
      <p className="mb-4">{sponsor.description}</p>
      <img src={sponsor.logo} alt={sponsor.name} className="w-16 h-16" />
    </div>
  );
};

export default SponsorCard;