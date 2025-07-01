import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash, FaPrint, FaTruck } from "react-icons/fa";
import { ordersListData, orderStatuses } from "../../../Constants/ordersData";
import { isWithinLastMonth, isWithinLastWeek } from "../../../utils/helpers";

const OrdersTable = ({ searchQuery, filterBy }) => {
  const [orders, setOrders] = useState(ordersListData);
  const [selectedOrders, setSelectedOrders] = useState([]);

  // Filter orders based on search and filter criteria
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = searchQuery
      ? order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerEmail.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesFilter =
      filterBy === "all"
        ? true
        : filterBy === "today"
        ? new Date(order.orderDate).toDateString() === new Date().toDateString()
        : filterBy === "week"
        ? isWithinLastWeek(order.orderDate)
        : filterBy === "month"
        ? isWithinLastMonth(order.orderDate)
        : order.status === filterBy;

    return matchesSearch && matchesFilter;
  });

  const getStatusConfig = (status) => {
    return orderStatuses.find((s) => s.value === status) || orderStatuses[0];
  };

  const handleSelectOrder = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map((order) => order.id));
    }
  };

  const handleAction = (action, orderId) => {
    console.log(`${action} action for order ${orderId}`);
    // Implement action logic here
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SAR",
    }).format(amount);
  };

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title text-arabic text-right">قائمة الطلبات</h2>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          عرض {filteredOrders.length} من أصل {orders.length} طلب
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedOrders.length > 0 && (
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-between">
          <span className="text-sm text-blue-600 dark:text-blue-400 text-arabic">
            تم تحديد {selectedOrders.length} طلب
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
              تصدير المحدد
            </button>
            <button className="px-3 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700">
              حذف المحدد
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr className="text-arabic">
              <th className="px-4 py-3 text-right">
                <input
                  type="checkbox"
                  checked={
                    selectedOrders.length === filteredOrders.length &&
                    filteredOrders.length > 0
                  }
                  onChange={handleSelectAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-gray-100">
                رقم الطلب
              </th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-gray-100">
                العميل
              </th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-gray-100">
                تاريخ الطلب
              </th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-gray-100">
                الحالة
              </th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-gray-100">
                المبلغ الإجمالي
              </th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900 dark:text-gray-100">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredOrders.map((order) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;

              return (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => handleSelectOrder(order.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100 text-arabic text-right">
                      {order.orderNumber}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 text-arabic">
                        {order.customerName}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {order.customerEmail}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-gray-900 dark:text-gray-100 text-arabic text-right">
                      {order.orderDateArabic}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}
                    >
                      <StatusIcon className="text-xs" />
                      <span className="text-arabic">{statusConfig.label}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100 text-right">
                      {formatCurrency(order.total)}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 justify-end">
                      <button
                        onClick={() => handleAction("view", order.id)}
                        className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        title="عرض"
                      >
                        <FaEye className="text-sm" />
                      </button>
                      <button
                        onClick={() => handleAction("edit", order.id)}
                        className="p-2 text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 rounded-lg transition-colors"
                        title="تعديل"
                      >
                        <FaEdit className="text-sm" />
                      </button>
                      {order.trackingNumber && (
                        <button
                          onClick={() => handleAction("track", order.id)}
                          className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                          title="تتبع"
                        >
                          <FaTruck className="text-sm" />
                        </button>
                      )}
                      <button
                        onClick={() => handleAction("print", order.id)}
                        className="p-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg transition-colors"
                        title="طباعة"
                      >
                        <FaPrint className="text-sm" />
                      </button>
                      <button
                        onClick={() => handleAction("delete", order.id)}
                        className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="حذف"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <FaTruck className="text-6xl mx-auto mb-4 opacity-50" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 text-arabic">
            لا توجد طلبات
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-arabic">
            لم يتم العثور على طلبات تطابق المعايير المحددة
          </p>
        </div>
      )}

      {/* Pagination would go here */}
      {filteredOrders.length > 0 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400 text-arabic">
            عرض 1-{Math.min(10, filteredOrders.length)} من{" "}
            {filteredOrders.length} طلب
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
              السابق
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
              التالي
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
