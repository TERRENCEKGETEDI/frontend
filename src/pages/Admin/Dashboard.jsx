import React from 'react';
import BarChart from '../../components/charts/BarChart';
import { mockAnalytics } from '../../data/mockData';

const Dashboard = () => {
  const chartData = mockAnalytics;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold">Pending Members</h2>
          <p className="text-2xl">5</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold">Total Events</h2>
          <p className="text-2xl">10</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold">Total Resources</h2>
          <p className="text-2xl">50</p>
        </div>
      </div>
      <BarChart data={chartData} />
    </div>
  );
};

export default Dashboard;