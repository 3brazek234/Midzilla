import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, options, title, subtitle }) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Cairo, sans-serif',
          },
          generateLabels: function(chart) {
            const datasets = chart.data.datasets;
            if (datasets.length) {
              const { data: values, backgroundColor } = datasets[0];
              return chart.data.labels.map((label, i) => {
                const total = values.reduce((a, b) => a + b, 0);
                const percentage = ((values[i] / total) * 100).toFixed(1);
                return {
                  text: `${label} (${percentage}%)`,
                  fillStyle: backgroundColor[i],
                  strokeStyle: backgroundColor[i],
                  lineWidth: 0,
                  pointStyle: 'circle',
                };
              });
            }
            return [];
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
            const dataset = context.dataset;
            const total = dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${context.parsed.toLocaleString('ar-SA')} (${percentage}%)`;
          },
        },
      },
    },
    ...options,
  };

  // Calculate total for display
  const total = data.datasets?.[0]?.data?.reduce((a, b) => a + b, 0) || 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      {/* Chart Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title || 'الرسم البياني الدائري'}
        </h3>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {subtitle}
          </p>
        )}
      </div>

      {/* Chart Container */}
      <div className="relative h-80">
        <Pie data={data} options={defaultOptions} />
      </div>

      {/* Chart Summary */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.labels?.map((label, index) => {
          const value = data.datasets?.[0]?.data?.[index] || 0;
          const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
          const backgroundColor = data.datasets?.[0]?.backgroundColor?.[index] || '#gray';
          
          return (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mb-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor }}
                ></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {label}
                </span>
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {value.toLocaleString('ar-SA')}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {percentage}%
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>آخر تحديث: {new Date().toLocaleDateString('ar-SA')}</span>
          <span>الإجمالي: {total.toLocaleString('ar-SA')}</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart; 