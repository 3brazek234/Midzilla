import React, { useState } from 'react';
import { 
  CategoryStatsCards, 
  CategoryQuickActions, 
  CategoryFilters, 
  CategoriesGrid, 
  CategoryActivity 
} from '../../Components/pagesComponent/categories';

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter) => {
    setFilterBy(filter);
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header Section with enhanced styling */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-arabic mb-3">
                إدارة التصنيفات
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-arabic max-w-2xl mx-auto">
                تنظيم وإدارة تصنيفات المنتجات والخدمات بطريقة فعالة ومنظمة
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Statistics Cards */}
          <div className="mb-8">
            <CategoryStatsCards />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <CategoryQuickActions />
          </div>

          {/* Main Content Grid */}
          <div className="space-y-8">
            {/* Categories Management Section */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden">
              <div className="p-6">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-arabic">
                      تصنيفات المنتجات
                    </h2>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-sm text-gray-500 dark:text-gray-400">إجمالي التصنيفات:</span>
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                      24
                    </span>
                  </div>
                </div>

                {/* Filters */}
                <div className="mb-6">
                  <CategoryFilters 
                    onSearchChange={handleSearchChange}
                    onFilterChange={handleFilterChange}
                  />
                </div>

                {/* Categories Grid */}
                <div>
                  <CategoriesGrid 
                    searchQuery={searchQuery}
                    filterBy={filterBy}
                  />
                </div>
              </div>
            </div>

            {/* Category Activity Section */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 space-x-reverse mb-6">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                    <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-arabic">
                    النشاط الأخير
                  </h2>
                </div>
                <CategoryActivity />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for background pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .dark .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default Categories;