// Mock resource service
import { mockResources } from '../data/mockData';

export const getResources = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResources);
    }, 500);
  });
};

export const uploadResource = async (resourceData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newResource = { ...resourceData, id: mockResources.length + 1 };
      mockResources.push(newResource);
      resolve({ success: true, resource: newResource });
    }, 500);
  });
};

export const updateResource = async (id, resourceData) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockResources.findIndex(resource => resource.id === id);
      if (index !== -1) {
        mockResources[index] = { ...mockResources[index], ...resourceData };
        resolve({ success: true, resource: mockResources[index] });
      } else {
        reject(new Error('Resource not found'));
      }
    }, 500);
  });
};

export const deleteResource = async (id) => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockResources.findIndex(resource => resource.id === id);
      if (index !== -1) {
        mockResources.splice(index, 1);
        resolve({ success: true });
      } else {
        reject(new Error('Resource not found'));
      }
    }, 500);
  });
};

export const downloadResource = async (resourceId) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, url: '#' });
    }, 500);
  });
};