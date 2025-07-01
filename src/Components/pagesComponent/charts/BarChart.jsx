import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, options, title, subtitle }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Cairo, sans-serif',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        usePointStyle: true,
        rtl: true,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y.toLocaleString('ar-SA')} ريال`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
        },
        ticks: {
          font: {
            family: 'Cairo, sans-serif',
          },
          callback: function(value) {
            return value.toLocaleString('ar-SA') + ' ريال';
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Cairo, sans-serif',
          },
        },
      },
    },
    ...options,
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Chart Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title || 'الرسم البياني العمودي'}
        </h3>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {subtitle}
          </p>
        )}
      </div>

      {/* Chart Container */}
      <div className="relative h-80">
        <Bar data={data} options={defaultOptions} />
      </div>

      {/* Chart Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</span>
          <span>إجمالي الفئات: {data.labels ? data.labels.length : 0}</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart; 