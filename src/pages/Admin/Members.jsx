import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import { getMembers, approveMember, rejectMember, moveToAlumni, updateMember } from '../../services/memberService';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [filter, setFilter] = useState('all'); // all, pending, approved, alumni
  const [branchFilter, setBranchFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', branch: '', becRole: 'Member' });

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [members, filter, branchFilter]);

  const fetchMembers = async () => {
    try {
      const membersData = await getMembers();
      setMembers(membersData);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const applyFilters = () => {
    let filtered = members;

    if (filter !== 'all') {
      if (filter === 'pending') {
        filtered = filtered.filter(m => m.status === 'Pending');
      } else if (filter === 'approved') {
        filtered = filtered.filter(m => m.status === 'Approved');
      } else if (filter === 'alumni') {
        filtered = filtered.filter(m => m.isAlumni);
      }
    }

    if (branchFilter !== 'all') {
      filtered = filtered.filter(m => m.branch === branchFilter);
    }

    setFilteredMembers(filtered);
  };

  const handleApprove = async (id) => {
    try {
      await approveMember(id);
      fetchMembers();
    } catch (error) {
      console.error('Error approving member:', error);
    }
  };

  const handleReject = async (id) => {
    if (window.confirm('Are you sure you want to reject this member?')) {
      try {
        await rejectMember(id);
        fetchMembers();
      } catch (error) {
        console.error('Error rejecting member:', error);
      }
    }
  };

  const handleMoveToAlumni = async (id) => {
    const year = prompt('Enter graduation year:');
    if (year) {
      try {
        await moveToAlumni(id, parseInt(year));
        fetchMembers();
      } catch (error) {
        console.error('Error moving to alumni:', error);
      }
    }
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      email: member.email,
      branch: member.branch,
      becRole: member.becRole
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMember(editingMember.id, formData);
      fetchMembers();
      setShowModal(false);
      setEditingMember(null);
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  const branches = [...new Set(members.map(m => m.branch))];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Members</h1>

      <div className="mb-4 flex space-x-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Members</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="alumni">Alumni</option>
        </select>

        <select
          value={branchFilter}
          onChange={(e) => setBranchFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Branches</option>
          {branches.map(branch => (
            <option key={branch} value={branch}>{branch}</option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filteredMembers.map(member => (
          <div key={member.id} className="bg-white p-4 shadow rounded flex justify-between items-center">
            <div>
              <p className="font-bold">{member.name}</p>
              <p>{member.email}</p>
              <p className="text-sm text-gray-600">
                {member.branch} | {member.becRole}
                {member.isAlumni && ` | Alumni (${member.graduationYear})`}
              </p>
              <span className={`px-2 py-1 rounded text-sm ${
                member.status === 'Approved' ? 'bg-green-100 text-green-800' :
                member.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {member.status}
              </span>
            </div>
            <div className="space-x-2">
              {member.status === 'Pending' && (
                <>
                  <Button onClick={() => handleApprove(member.id)}>Approve</Button>
                  <Button onClick={() => handleReject(member.id)} variant="danger">Reject</Button>
                </>
              )}
              {member.status === 'Approved' && !member.isAlumni && (
                <>
                  <Button onClick={() => handleEdit(member)} variant="secondary">Edit</Button>
                  <Button onClick={() => handleMoveToAlumni(member.id)} variant="secondary">Move to Alumni</Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-bold mb-4">Edit Member</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Branch</label>
            <select
              value={formData.branch}
              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Branch</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Software Engineering">Software Engineering</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">BEC Role</label>
            <select
              value={formData.becRole}
              onChange={(e) => setFormData({ ...formData, becRole: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="Member">Member</option>
              <option value="BEC Committee">BEC Committee</option>
              <option value="NEC Member">NEC Member</option>
            </select>
          </div>
          <Button type="submit">Update</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Members;