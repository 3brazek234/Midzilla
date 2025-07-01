import React, { useState } from 'react';
import UserStatsCards from '@/Components/pagesComponent/users/UserStatsCards';
import UserQuickActions from '@/Components/pagesComponent/users/UserQuickActions';
import UserFilters from '@/Components/pagesComponent/users/UserFilters';
import UsersList from '@/Components/pagesComponent/users/UsersList';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter) => {
    setFilterBy(filter);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-4 sm:mb-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-right">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                إدارة العملاء
              </h1>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="mb-4 sm:mb-6 fade-in">
          <UserStatsCards />
        </div>

        {/* Quick Actions */}
        <div className="mb-4 sm:mb-6 slide-up">
          <UserQuickActions />
        </div>

        {/* Filters */}
        <div className="mb-4 sm:mb-6 fade-in">
          <UserFilters 
            onSearchChange={handleSearchChange}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* Users List */}
        <div className="fade-in">
          <UsersList />
        </div>

        {/* Footer Summary */}
        <div className="mt-6 sm:mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700 fade-in">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              آخر تحديث: اليوم في {new Date().toLocaleTimeString('ar-SA')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;