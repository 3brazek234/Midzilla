import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = ({ data, options, title, subtitle }) => {
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
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
        },
        ticks: {
          font: {
            family: 'Cairo, sans-serif',
          },
          callback: function(value) {
            return value.toLocaleString('ar-SA');
          },
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false,
        },
        ticks: {
          font: {
            family: 'Cairo, sans-serif',
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    elements: {
      point: {
        radius: 6,
        hoverRadius: 8,
        borderWidth: 2,
        hoverBorderWidth: 3,
      },
      line: {
        tension: 0.4,
        borderWidth: 3,
      },
    },
    ...options,
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Chart Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title || 'رسم المنطقة البياني'}
        </h3>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {subtitle}
          </p>
        )}
      </div>

      {/* Chart Container */}
      <div className="relative h-80">
        <Line data={data} options={defaultOptions} />
      </div>

      {/* Chart Insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.datasets?.map((dataset, index) => {
          const total = dataset.data.reduce((a, b) => a + b, 0);
          const average = total / dataset.data.length;
          const maxValue = Math.max(...dataset.data);
          
          return (
            <div key={index} className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: dataset.borderColor }}
                ></div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {dataset.label}
                </h4>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">الإجمالي:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {total.toLocaleString('ar-SA')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">المتوسط:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {Math.round(average).toLocaleString('ar-SA')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">أعلى قيمة:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {maxValue.toLocaleString('ar-SA')}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</span>
          <span>فترة البيانات: {data.labels?.[0]} - {data.labels?.[data.labels?.length - 1]}</span>
        </div>
      </div>
    </div>
  );
};

export default AreaChart; 