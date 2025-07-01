import React from 'react';
import { FaTimes, FaFileDownload } from 'react-icons/fa';

const BillDetailsModal = ({ bill, onClose }) => {
  if (!bill) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl mx-4 shadow-xl">
        {/* Modal Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            تفاصيل الفاتورة #{bill.invoiceNumber}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                معلومات العميل
              </h4>
              <div className="space-y-2">
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400">اسم العميل</label>
                  <p className="text-gray-900 dark:text-white">{bill.customerName}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400">رقم الهاتف</label>
                  <p className="text-gray-900 dark:text-white">{bill.phoneNumber || 'غير متوفر'}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400">البريد الإلكتروني</label>
                  <p className="text-gray-900 dark:text-white">{bill.email || 'غير متوفر'}</p>
                </div>
              </div>
            </div>

            {/* Bill Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                معلومات الفاتورة
              </h4>
              <div className="space-y-2">
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400">رقم الفاتورة</label>
                  <p className="text-gray-900 dark:text-white">{bill.invoiceNumber}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400">تاريخ الفاتورة</label>
                  <p className="text-gray-900 dark:text-white">{bill.date} {bill.time}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-400">وسيلة الدفع</label>
                  <p className="text-gray-900 dark:text-white">{bill.paymentMethod}</p>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-4 md:col-span-2">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                تفاصيل الدفع
              </h4>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">المبلغ الإجمالي</label>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {bill.amount.toLocaleString('ar-SA', { style: 'currency', currency: 'SAR' })}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 dark:text-gray-400">حالة الدفع</label>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        bill.status === 'مدفوعة'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}
                    >
                      {bill.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            إغلاق
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2"
          >
            <FaFileDownload className="w-4 h-4" />
            تحميل PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillDetailsModal; 