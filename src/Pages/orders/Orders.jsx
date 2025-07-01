import React, { useState } from 'react';
import { 
  OrderStatsCards, 
  OrderQuickActions, 
  OrderFilters, 
  OrdersTable, 
  RecentActivity 
} from '../../Components/pagesComponent/orders';

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter) => {
    setFilterBy(filter);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-arabic text-right mb-2">
            إدارة الطلبات
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-arabic text-right">
            تتبع ومتابعة جميع طلبات العملاء وحالات الشحن
          </p>
        </div>

        {/* Statistics Cards */}
        <OrderStatsCards />

        {/* Quick Actions */}
        <OrderQuickActions />

        {/* Main Content Grid */}
        <div>
          {/* Orders Management Section */}
          <div>
            {/* Filters */}
            <OrderFilters 
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
            />

            {/* Orders Table */}
            <OrdersTable 
              searchQuery={searchQuery}
              filterBy={filterBy}
            />
          </div>

          {/* Sidebar */}
          <div className="mt-10">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;