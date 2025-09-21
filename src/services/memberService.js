// Member service functions

import { mockMembers } from '../data/mockData';

export const getMembers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMembers);
    }, 500);
  });
};

export const getMembersByBranch = async (branch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockMembers.filter(member => member.branch === branch);
      resolve(filtered);
    }, 500);
  });
};

export const getAlumni = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const alumni = mockMembers.filter(member => member.isAlumni);
      resolve(alumni);
    }, 500);
  });
};

export const updateMember = async (id, memberData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockMembers.findIndex(member => member.id === id);
      if (index !== -1) {
        mockMembers[index] = { ...mockMembers[index], ...memberData };
        resolve(mockMembers[index]);
      } else {
        reject(new Error('Member not found'));
      }
    }, 500);
  });
};

export const deleteMember = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockMembers.findIndex(member => member.id === id);
      if (index !== -1) {
        mockMembers.splice(index, 1);
        resolve();
      } else {
        reject(new Error('Member not found'));
      }
    }, 500);
  });
};

export const approveMember = async (id) => {
  return updateMember(id, { status: 'Approved' });
};

export const rejectMember = async (id) => {
  return deleteMember(id);
};

export const moveToAlumni = async (id, graduationYear) => {
  return updateMember(id, { isAlumni: true, status: 'Alumni', graduationYear });
};

export const blockMember = async (id) => {
  return updateMember(id, { status: 'Blocked' });
};

export const unblockMember = async (id) => {
  return updateMember(id, { status: 'Approved' });
};