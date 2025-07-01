import React from 'react';
import { FaPlus, FaDownload, FaSearch, FaFilter, FaPrint, FaFileExcel } from 'react-icons/fa';

const BillsActions = ({ onCreateInvoice }) => {
  const handleExportPDF = () => {
    console.log('Exporting to PDF...');
    // Implement PDF export functionality
  };

  const handleExportExcel = () => {
    console.log('Exporting to Excel...');
    // Implement Excel export functionality
  };

  const handlePrintInvoices = () => {
    console.log('Printing invoices...');
    // Implement print functionality
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            إجراءات سريعة
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            إدارة الفواتير والعمليات السريعة
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {/* Create New Invoice */}
          <button
            onClick={onCreateInvoice}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <FaPlus className="w-4 h-4" />
            <span>إنشاء فاتورة جديدة</span>
          </button>

          {/* Search/Filter */}
          <button className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200">
            <FaSearch className="w-4 h-4" />
            <span className="hidden sm:inline">بحث</span>
          </button>

          <button className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200">
            <FaFilter className="w-4 h-4" />
            <span className="hidden sm:inline">فلترة</span>
          </button>

          {/* Export Options */}
          <button
            onClick={handleExportPDF}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
          >
            <FaDownload className="w-4 h-4" />
            <span className="hidden sm:inline">PDF</span>
          </button>

          <button
            onClick={handleExportExcel}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
          >
            <FaFileExcel className="w-4 h-4" />
            <span className="hidden sm:inline">Excel</span>
          </button>

          <button
            onClick={handlePrintInvoices}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors duration-200"
          >
            <FaPrint className="w-4 h-4" />
            <span className="hidden sm:inline">طباعة</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">156</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">إجمالي الفواتير</div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">142</div>
          <div className="text-sm text-green-700 dark:text-green-300">مدفوعة</div>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">12</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">معلقة</div>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">2</div>
          <div className="text-sm text-red-700 dark:text-red-300">متأخرة</div>
        </div>
      </div>
    </div>
  );
};

export default BillsActions; 