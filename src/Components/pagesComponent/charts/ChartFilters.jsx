import React, { useState } from 'react';
import { FaCalendarAlt, FaFilter, FaDownload  } from 'react-icons/fa';

const ChartFilters = ({ filters, onFilterChange, onExport, onRefresh }) => {
  const [selectedFilter, setSelectedFilter] = useState('month');
  const [showCustomDate, setShowCustomDate] = useState(false);

  const handleFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
    setShowCustomDate(filterValue === 'custom');
    onFilterChange(filterValue);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Title */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <FaFilter className="text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            فلترة البيانات
          </h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
          >
          
            <span className="hidden sm:inline">تحديث</span>
          </button>

          {/* Export Button */}
          <button
            onClick={onExport}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
          >
            <FaDownload className="w-4 h-4" />
            <span className="hidden sm:inline">تصدير</span>
          </button>
        </div>
      </div>

      {/* Custom Date Range */}
      {showCustomDate && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
            <FaCalendarAlt className="text-blue-600 dark:text-blue-400" />
            <h4 className="font-medium text-gray-900 dark:text-white">اختر الفترة الزمنية</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                من تاريخ
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                إلى تاريخ
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
              تطبيق الفلتر
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartFilters; 