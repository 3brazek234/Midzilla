import React, { useState } from 'react';
import { FaSearch, FaFilter, FaDownload, FaSync, FaTimes } from 'react-icons/fa';
import { orderFilters } from '../../../Constants/ordersData';

const OrderFilters = ({ onFilterChange, onSearchChange }) => {
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
    console.log('Exporting orders...');
    // Export functionality would be implemented here
  };

  const handleRefresh = () => {
    console.log('Refreshing orders...');
    // Refresh functionality would be implemented here
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearchChange && onSearchChange('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <FaFilter className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              فلترة وبحث الطلبات
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ابحث وصنف الطلبات حسب حالتها
            </p>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            title="تحديث"
          >
            <FaSync className="text-sm" />
            <span className="hidden sm:inline">تحديث</span>
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            title="تصدير"
          >
            <FaDownload className="text-sm" />
            <span className="hidden sm:inline">تصدير</span>
          </button>
        </div>
      </div>

      {/* Main Filter Section */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            البحث في الطلبات
          </label>
          <div className="relative">
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث برقم الطلب، اسم العميل، أو أي تفاصيل أخرى..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pr-10 pl-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-right transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            فلترة حسب الحالة
          </label>
          <div className="flex flex-wrap gap-3">
            {orderFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => handleFilterChange(filter.value)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {filter.label}
                  {activeFilter === filter.value && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filter Indicator */}
      {(activeFilter !== 'all' || searchQuery) && (
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-blue-600 rounded-full">
                <FaFilter className="text-white text-xs" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                  الفلاتر النشطة
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400">
                  {activeFilter !== 'all' && (
                    <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                      الحالة: {orderFilters.find(f => f.value === activeFilter)?.label}
                    </span>
                  )}
                  {searchQuery && (
                    <span className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                      البحث: "{searchQuery.substring(0, 20)}{searchQuery.length > 20 ? '...' : ''}"
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                handleFilterChange('all');
                clearSearch();
              }}
              className="px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-lg transition-all duration-300"
            >
              مسح الكل
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderFilters; 