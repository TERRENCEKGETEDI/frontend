import React from 'react';

const BarChart = ({ data }) => {
  // Placeholder for bar chart
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-4">Analytics Chart</h3>
      <div className="flex items-end space-x-2">
        {data.map((item, index) => (
          <div key={index} className="bg-blue-500" style={{ height: `${item.value * 10}px`, width: '20px' }}>
            <span className="text-xs text-white">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;