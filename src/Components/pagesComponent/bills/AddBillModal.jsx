import React, { useState } from 'react';
import { FaTimes, FaDatabase, FaPlus } from 'react-icons/fa';

const AddBillModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerType: 'manual', // 'manual' or 'database'
    email: '',
    phoneNumber: '',
    paymentMethod: 'بطاقة ائتمان',
    productDetails: '',
    quantity: 1,
    price: '',
    discount: '',
    totalPrice: '',
    internalNotes: '',
    status: 'غير مدفوعة'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      };

      // Calculate total price when price, quantity, or discount changes
      if (['price', 'quantity', 'discount'].includes(name)) {
        const price = parseFloat(newData.price) || 0;
        const quantity = parseInt(newData.quantity) || 0;
        const discount = parseFloat(newData.discount) || 0;
        const subtotal = price * quantity;
        newData.totalPrice = (subtotal - discount).toFixed(2);
      }

      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate invoice number based on current date and time
    const now = new Date();
    const invoiceNumber = `INV-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    
    const newBill = {
      id: Date.now(),
      invoiceNumber,
      date: now.toISOString().split('T')[0],
      time: now.toTimeString().split(' ')[0].substring(0, 5),
      ...formData,
      price: parseFloat(formData.price),
      discount: parseFloat(formData.discount) || 0,
      totalPrice: parseFloat(formData.totalPrice)
    };

    onAdd(newBill);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-3xl mx-4 shadow-xl">
        {/* Modal Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            إضافة فاتورة جديدة
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                معلومات العميل
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    اسم العميل *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="customerName"
                      required
                      value={formData.customerName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="اختر من قاعدة البيانات أو أدخل يدوي"
                    />
                    <button
                      type="button"
                      className="px-3 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      title="اختيار من قاعدة البيانات"
                    >
                      <FaDatabase className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    البريد الإلكتروني (اختياري - لإرسال نسخة من الفاتورة)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    وسيلة الدفع *
                  </label>
                  <select
                    name="paymentMethod"
                    required
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="بطاقة ائتمان">بطاقة ائتمان</option>
                    <option value="تحويل بنكي">تحويل بنكي</option>
                    <option value="نقداً">نقداً</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product and Payment Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                تفاصيل المنتج والدفع
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    تفاصيل المنتج / الخدمة *
                  </label>
                  <textarea
                    name="productDetails"
                    required
                    value={formData.productDetails}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      الكمية *
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      required
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      السعر *
                    </label>
                    <input
                      type="number"
                      name="price"
                      required
                      min="0"
                      step="0.01"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    الخصم (إن وجد)
                  </label>
                  <input
                    type="number"
                    name="discount"
                    min="0"
                    step="0.01"
                    value={formData.discount}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    إجمالي السعر النهائي
                  </label>
                  <input
                    type="text"
                    name="totalPrice"
                    value={formData.totalPrice}
                    readOnly
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    ملاحظات داخلية (للموظفين فقط)
                  </label>
                  <textarea
                    name="internalNotes"
                    value={formData.internalNotes}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <FaPlus className="w-4 h-4" />
              حفظ الفاتورة
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBillModal; 