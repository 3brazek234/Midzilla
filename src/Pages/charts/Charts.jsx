import React, { useState } from 'react';

// Import chart components
import ChartStatsCards from '../../Components/pagesComponent/charts/ChartStatsCards';
import ChartTypeSelector from '../../Components/pagesComponent/charts/ChartTypeSelector';
import ChartFilters from '../../Components/pagesComponent/charts/ChartFilters';
import LineChart from '../../Components/pagesComponent/charts/LineChart';
import BarChart from '../../Components/pagesComponent/charts/BarChart';
import PieChart from '../../Components/pagesComponent/charts/PieChart';
import AreaChart from '../../Components/pagesComponent/charts/AreaChart';
import { BestSellingProductsTable } from '../../Components/pagesComponent/charts';

// Import chart data and configurations
import {
  salesLineChartData,
  categoryBarChartData,
  customerDistributionData,
  marketingChannelsData,
  userGrowthData,
  chartStatsCards,
  chartTypes,
  chartFilters,
  chartOptions,
} from '../../Constants/chartsData';

const Charts = () => {
  const [activeChart, setActiveChart] = useState('line');
  const [selectedFilter, setSelectedFilter] = useState('month');

  // Handle chart type change
  const handleChartChange = (chartType) => {
    setActiveChart(chartType);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    // Here you would typically update the chart data based on the filter
    console.log('Filter changed to:', filter);
  };

  // Handle export functionality
  const handleExport = () => {
    console.log('Exporting chart data...');
    // Implement export functionality here
  };

  // Handle refresh functionality
  const handleRefresh = () => {
    console.log('Refreshing chart data...');
    // Implement refresh functionality here
  };

  // Get the appropriate chart data based on active chart type
  const getChartData = () => {
    switch (activeChart) {
      case 'line':
        return salesLineChartData;
      case 'bar':
        return categoryBarChartData;
      case 'pie':
        return customerDistributionData;
      case 'area':
        return userGrowthData;
      default:
        return salesLineChartData;
    }
  };

  // Render the appropriate chart component
  const renderChart = () => {
    const data = getChartData();
    
    switch (activeChart) {
      case 'line':
        return (
          <LineChart 
            data={data} 
            options={chartOptions}
            title="تحليل المبيعات والإيرادات"
            subtitle="مقارنة المبيعات والإيرادات على مدار السنة"
          />
        );
      case 'bar':
        return (
          <BarChart 
            data={data} 
            options={chartOptions}
            title="الإيرادات حسب الفئة"
            subtitle="توزيع الإيرادات على مختلف فئات المنتجات والخدمات"
          />
        );
      case 'pie':
        return (
          <PieChart 
            data={data} 
            options={chartOptions}
            title="توزيع العملاء"
            subtitle="نسبة توزيع العملاء حسب النوع"
          />
        );
      case 'area':
        return (
          <AreaChart 
            data={data} 
            options={chartOptions}
            title="نمو المستخدمين"
            subtitle="تطور أعداد المستخدمين النشطين والجدد"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              صفحة التحليلات والرسوم البيانية
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              استعرض وحلل البيانات من خلال مجموعة متنوعة من الرسوم البيانية التفاعلية
            </p>
          </div>
          
          {/* Real-time indicator */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              البيانات محدثة
            </span>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <ChartStatsCards statsData={chartStatsCards} />

      {/* Chart Type Selector */}
      <ChartTypeSelector 
        chartTypes={chartTypes}
        activeChart={activeChart}
        onChartChange={handleChartChange}
      />

      {/* Chart Filters */}
      <ChartFilters 
        filters={chartFilters}
        onFilterChange={handleFilterChange}
        onExport={handleExport}
        onRefresh={handleRefresh}
      />

      {/* Main Chart Display */}
      <div className="space-y-8">
        {renderChart()}
      </div>

      {/* Best Selling Products Table */}
      <div className="space-y-8">
        <BestSellingProductsTable />
      </div>

      {/* Secondary Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Marketing Channels Doughnut Chart */}
        <PieChart 
          data={marketingChannelsData} 
          options={chartOptions}
          title="منصات التسويق"
          subtitle="توزيع الزوار حسب منصات التسويق المختلفة"
        />

        {/* Additional Line Chart for comparison */}
        <LineChart 
          data={salesLineChartData} 
          options={chartOptions}
          title="مقارنة سريعة"
          subtitle="عرض مبسط للمبيعات والإيرادات"
        />
      </div>

      {/* Chart Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          رؤى وملاحظات
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              أداء المبيعات
            </h4>
            <p className="text-blue-700 dark:text-blue-400 text-sm">
              تشهد المبيعات نمواً إيجابياً بنسبة 12.5% مقارنة بالشهر الماضي، مع تركز الأداء في فئة الخدمات.
            </p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
              نمو العملاء
            </h4>
            <p className="text-green-700 dark:text-green-400 text-sm">
              ازداد عدد العملاء الجدد بنسبة 15.3%، مع تحسن واضح في معدلات الاحتفاظ بالعملاء الحاليين.
            </p>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
              التسويق الرقمي
            </h4>
            <p className="text-purple-700 dark:text-purple-400 text-sm">
              تصدرت منصة جوجل مصادر الزوار بنسبة 39%، تليها الزيارات المباشرة بنسبة 21%.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Information */}
      <div className="bg-gray-100 dark:bg-gray-800/50 rounded-xl p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="mb-2 md:mb-0">
            <span>آخر تحديث للبيانات: {new Date().toLocaleString('ar-SA')}</span>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <span>مصدر البيانات: نظام إدارة المبيعات</span>
            <span>•</span>
            <span>دقة البيانات: 99.9%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;