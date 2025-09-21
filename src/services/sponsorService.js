// Mock sponsor service
export const submitSponsorForm = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, sponsor: { ...formData, id: Date.now() } });
    }, 500);
  });
};

export const getSponsorDashboard = async (sponsorId) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        level: 'Gold',
        eventsSponsored: 2,
        benefits: ['Logo on website', 'Booth at events'],
      });
    }, 500);
  });
};

import { mockSponsors } from '../data/mockData';

export const getPendingSponsors = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSponsors);
    }, 500);
  });
};