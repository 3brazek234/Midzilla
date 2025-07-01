import React, { useState } from 'react';
import { FaSearch, FaFilter, FaDownload } from 'react-icons/fa';
import { categoryFilters } from '../../../Constants/categoriesData';

const CategoryFilters = ({ onFilterChange, onSearchChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
    onFilterChange && onFilterChange(filterValue);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange && onSearchChange(value);
  };

  const handleExport = () => {
    console.log('Exporting categories...');
    // Export functionality would be implemented here
  };

  const handleRefresh = () => {
    console.log('Refreshing categories...');
    // Refresh functionality would be implemented here
  };

  return (
    <div className="dashboard-card mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="البحث في التصنيفات..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pr-10 pl-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-arabic text-right"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleRefresh}
            className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
            title="تحديث"
          >
          </button>
          <button
            onClick={handleExport}
            className="p-3 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-200 dark:hover:bg-green-900/30 transition-all duration-300 hover:scale-105"
            title="تصدير"
          >
            <FaDownload className="text-lg" />
          </button>
        </div>
      </div>

      {/* Active Filter Indicator */}
      {activeFilter !== 'all' && (
        <div className="mt-4 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <FaFilter className="text-sm" />
            <span className="text-sm text-arabic">
              فلترة حسب: {categoryFilters.find(f => f.value === activeFilter)?.label}
            </span>
          </div>
          <button
            onClick={() => handleFilterChange('all')}
            className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            إزالة الفلتر
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryFilters; 