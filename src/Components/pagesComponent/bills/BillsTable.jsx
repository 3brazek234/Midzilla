import React, { useState } from 'react';
import { FaEye, FaFileDownload, FaSearch, FaPlus } from 'react-icons/fa';
import { sampleBills } from './BillModel';
import BillDetailsModal from './BillDetailsModal';
import AddBillModal from './AddBillModal';
import BillsStats from './BillsStats';

const BillsTable = () => {
  const [selectedBill, setSelectedBill] = useState(null);
  const [bills, setBills] = useState(sampleBills);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleViewDetails = (bill) => {
    setSelectedBill(bill);
  };

  const handleCloseModal = () => {
    setSelectedBill(null);
  };

  const handleAddBill = (newBill) => {
    setBills(prevBills => [newBill, ...prevBills]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Table Header with Search and Add Button */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                قائمة الفواتير
              </h3>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2"
              >
                <FaPlus className="w-4 h-4" />
                إضافة فاتورة
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="بحث في الفواتير..."
                className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  رقم الفاتورة
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  اسم العميل
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  وسيلة الدفع
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  التاريخ
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  الوقت
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  قيمة الفاتورة
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  حالة الدفع
                </th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {bills.map((bill) => (
                <tr 
                  key={bill.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {bill.invoiceNumber}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {bill.customerName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {bill.paymentMethod}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {bill.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {bill.time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {bill.amount.toLocaleString('ar-SA', { style: 'currency', currency: 'SAR' })}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        bill.status === 'مدفوعة'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}
                    >
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewDetails(bill)}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        title="عرض التفاصيل"
                      >
                        <FaEye className="w-5 h-5" />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                        title="تحميل PDF"
                      >
                        <FaFileDownload className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              عرض 1-10 من 50 فاتورة
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                السابق
              </button>
              <button className="px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                التالي
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bills Statistics and Reports */}
      <BillsStats bills={bills} />

      {/* Bill Details Modal */}
      {selectedBill && (
        <BillDetailsModal
          bill={selectedBill}
          onClose={handleCloseModal}
        />
      )}

      {/* Add Bill Modal */}
      {showAddModal && (
        <AddBillModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddBill}
        />
      )}
    </div>
  );
};

export default BillsTable; 