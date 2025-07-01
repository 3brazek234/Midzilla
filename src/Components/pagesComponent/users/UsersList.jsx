import React from "react";
import { users } from "@/Constants/usersData";
import UserItem from "./UserItem";
import { FaEye, FaEdit, FaTrash, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";

const UsersList = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'inactive':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'vip':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'regular':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'wholesale':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="dashboard-card overflow-hidden">
      {/* Table View - Hidden on medium and small screens */}
      <div className="responsive-container">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="table-header">
                  اسم العميل
                </th>
                <th scope="col" className="table-header">
                  معلومات التواصل
                </th>
                <th scope="col" className="table-header">
                  نوع العميل
                </th>
                <th scope="col" className="table-header">
                  العنوان
                </th>
                <th scope="col" className="table-header">
                  الحالة
                </th>
                <th scope="col" className="table-header">
                  المشتريات والتواريخ
                </th>
                <th scope="col" className="table-header">
                  إجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => (
                <UserItem key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Card View - Visible on medium and small screens */}
      <div className="responsive-cards p-4">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-card-header">
              <div className="user-card-avatar">
                {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div className="user-card-info">
                <div className="user-card-name">{user.name}</div>
                <div className="user-card-email">{user.email}</div>
              </div>
              <div className={`user-card-status ${getStatusColor(user.status)}`}>
                {user.status === 'active' ? 'نشط' : user.status === 'inactive' ? 'غير نشط' : 'في الانتظار'}
              </div>
            </div>

            <div className="user-card-details">
              <div className="user-card-detail">
                <div className="user-card-label">نوع العميل</div>
                <div className={`user-card-value ${getTypeColor(user.type)} px-2 py-1 rounded-full text-xs inline-block`}>
                  {user.type === 'vip' ? 'VIP' : user.type === 'regular' ? 'عادي' : 'جملة'}
                </div>
              </div>
              <div className="user-card-detail">
                <div className="user-card-label">رقم الهاتف</div>
                <div className="user-card-value flex items-center gap-1">
                  <FaPhone className="text-gray-400 text-xs" />
                  {user.phone}
                </div>
              </div>
              <div className="user-card-detail">
                <div className="user-card-label">العنوان</div>
                <div className="user-card-value flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-400 text-xs" />
                  {user.address}
                </div>
              </div>
              <div className="user-card-detail">
                <div className="user-card-label">إجمالي المشتريات</div>
                <div className="user-card-value flex items-center gap-1">
                  <FaShoppingCart className="text-gray-400 text-xs" />
                  {formatCurrency(user.totalPurchases)}
                </div>
              </div>
            </div>

            <div className="user-card-actions">
              <button className="user-card-btn user-card-btn-primary">
                <FaEye className="text-xs" />
                عرض
              </button>
              <button className="user-card-btn user-card-btn-secondary">
                <FaEdit className="text-xs" />
                تعديل
              </button>
              <button className="user-card-btn user-card-btn-secondary">
                <FaTrash className="text-xs" />
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
