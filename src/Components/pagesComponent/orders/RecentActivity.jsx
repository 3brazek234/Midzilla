import React from 'react';
import { FaBell, FaClock, FaEye, FaChevronLeft } from 'react-icons/fa';
import { orderActivities } from '../../../Constants/ordersData';

const RecentActivity = () => {
  const getPriorityClasses = (priority) => {
    switch (priority) {
      case 'urgent':
        return {
          bg: 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20',
          border: 'border-red-200 dark:border-red-800',
          dot: 'bg-red-500',
          icon: 'text-red-600 dark:text-red-400'
        };
      case 'high':
        return {
          bg: 'bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
          border: 'border-orange-200 dark:border-orange-800',
          dot: 'bg-orange-500',
          icon: 'text-orange-600 dark:text-orange-400'
        };
      case 'medium':
        return {
          bg: 'bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20',
          border: 'border-yellow-200 dark:border-yellow-800',
          dot: 'bg-yellow-500',
          icon: 'text-yellow-600 dark:text-yellow-400'
        };
      case 'low':
        return {
          bg: 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
          border: 'border-green-200 dark:border-green-800',
          dot: 'bg-green-500',
          icon: 'text-green-600 dark:text-green-400'
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
          border: 'border-blue-200 dark:border-blue-800',
          dot: 'bg-blue-500',
          icon: 'text-blue-600 dark:text-blue-400'
        };
    }
  };

  const getActivityIcon = (priority) => {
    switch (priority) {
      case 'urgent':
        return '🚨';
      case 'high':
        return '⚡';
      case 'medium':
        return '📋';
      case 'low':
        return '✅';
      default:
        return '📋';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <FaBell className="text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              النشاط الأخير
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              آخر التحديثات والأنشطة على الطلبات
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <FaClock className="text-xs" />
          <span>مباشر</span>
        </div>
      </div>
      
      {/* Activities List */}
      <div className="space-y-3">
        {orderActivities.map((activity, index) => {
          const classes = getPriorityClasses(activity.priority);
          return (
            <div 
              key={activity.id}
              className={`${classes.bg} ${classes.border} border rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                {/* Activity Icon and Dot */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl">
                    {getActivityIcon(activity.priority)}
                  </div>
                  <div className={`w-3 h-3 rounded-full ${classes.dot} animate-pulse`}></div>
                  {index < orderActivities.length - 1 && (
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-600"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-relaxed">
                        {activity.message}
                      </p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                      <FaChevronLeft className="text-xs" />
                    </button>
                  </div>
                  
                  {/* Order Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs">
                      <span className={`px-2 py-1 rounded-full ${classes.bg} ${classes.icon} font-medium border ${classes.border}`}>
                        #{activity.orderNumber}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <FaClock className="text-xs" />
                        <span>{activity.time}</span>
                      </div>
                    </div>
                    
                    {/* Priority Badge */}
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${classes.icon} ${classes.bg} border ${classes.border}`}>
                      {activity.priority === 'urgent' ? 'عاجل' :
                       activity.priority === 'high' ? 'عالي' :
                       activity.priority === 'medium' ? 'متوسط' : 'منخفض'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State (if no activities) */}
      {orderActivities.length === 0 && (
        <div className="text-center py-8">
          <div className="text-6xl mb-4">📭</div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">لا توجد أنشطة حديثة</p>
          <p className="text-sm text-gray-400 dark:text-gray-500">ستظهر الأنشطة الجديدة هنا</p>
        </div>
      )}

      {/* Footer Actions */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors hover:scale-105">
            <FaEye className="text-xs" />
            <span>عرض جميع الأنشطة</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span>آخر تحديث:</span>
            <span className="font-medium">منذ دقيقتين</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity; 