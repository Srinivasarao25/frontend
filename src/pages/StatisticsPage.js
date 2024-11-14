// src/pages/StatisticsPage.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const StatisticsPage = () => {
  // Sample crop production data for visualization
  const cropData = [
    { crop: 'Arhar/Tur', production: 58000 },
    { crop: 'Bajra', production: 12000 },
    { crop: 'Castor seed', production: 3500 },
    { crop: 'Cotton', production: 15000 },
    { crop: 'Dry chillies', production: 8000 },
    { crop: 'Gram', production: 13000 },
    { crop: 'Groundnut', production: 14000 },
    { crop: 'Maize', production: 18000 },
    { crop: 'Rice', production: 25000 },
    { crop: 'Sugarcane', production: 22000 },
    // Add more crops as needed
  ];

  // Prepare data for the Bar chart (production of each crop)
  const barChartData = {
    labels: cropData.map((item) => item.crop),
    datasets: [
      {
        label: 'Crop Production (Tonnes)',
        data: cropData.map((item) => item.production),
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for the Pie chart (percentage of total production by each crop)
  const totalProduction = cropData.reduce((sum, item) => sum + item.production, 0);
  const pieChartData = {
    labels: cropData.map((item) => item.crop),
    datasets: [
      {
        label: 'Crop Share in Total Production',
        data: cropData.map((item) => (item.production / totalProduction) * 100),
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#cc65fe',
          '#ffce56',
          '#4CAF50',
          '#FF9800',
          '#00BCD4',
          '#FF5722',
          '#8BC34A',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="statistics">
      <h1>Crop Statistics</h1>
      <p>Here you can find various statistics related to crop production and environmental factors.</p>

      <div className="chart-container">
        <div className="bar-chart">
          <h3>Crop Production (Tonnes)</h3>
          <Bar data={barChartData} options={{ responsive: true }} />
        </div>

        <div className="pie-chart">
          <h3>Share of Each Crop in Total Production</h3>
          <Pie data={pieChartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
