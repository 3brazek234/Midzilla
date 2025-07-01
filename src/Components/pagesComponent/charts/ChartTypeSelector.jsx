import React from 'react';

const ChartTypeSelector = ({ chartTypes, activeChart, onChartChange }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        أنواع الرسوم البيانية
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {chartTypes.map((chart) => {
          const IconComponent = chart.icon;
          const isActive = activeChart === chart.id;
          
          return (
            <button
              key={chart.id}
              onClick={() => onChartChange(chart.id)}
              className={`relative p-4 rounded-lg border-2 transition-all duration-300 text-center group ${
                isActive
                  ? `border-${chart.color}-500 bg-${chart.color}-50 dark:bg-${chart.color}-900/20`
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-900/50'
              }`}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-${chart.color}-500 rounded-full border-2 border-white dark:border-gray-800`}></div>
              )}
              
              {/* Icon */}
              <div className={`flex justify-center mb-2 ${
                isActive ? `text-${chart.color}-600 dark:text-${chart.color}-400` : 'text-gray-500 dark:text-gray-400'
              }`}>
                <IconComponent className="w-8 h-8" />
              </div>
              
              {/* Chart Name */}
              <h4 className={`font-medium text-sm mb-1 ${
                isActive ? `text-${chart.color}-700 dark:text-${chart.color}-300` : 'text-gray-700 dark:text-gray-300'
              }`}>
                {chart.name}
              </h4>
              
              {/* Description */}
              <p className={`text-xs ${
                isActive ? `text-${chart.color}-600 dark:text-${chart.color}-400` : 'text-gray-500 dark:text-gray-400'
              }`}>
                {chart.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChartTypeSelector; 