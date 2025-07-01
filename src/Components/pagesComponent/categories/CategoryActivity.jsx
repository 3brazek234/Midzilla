import React from 'react';
import { categoryActivities } from '../../../Constants/categoriesData';

const CategoryActivity = () => {
  const getPriorityClasses = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'priority-urgent';
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return 'priority-medium';
    }
  };

  return (
    <div className="dashboard-card">
      <h2 className="section-title text-arabic text-right mb-6">النشاط الأخير</h2>
      
      <div className="space-y-4">
        {categoryActivities.map((activity) => (
          <div 
            key={activity.id}
            className={`notification-card p-4 rounded-lg ${getPriorityClasses(activity.priority)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 text-arabic text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {activity.message}
                </p>
                <div className="flex items-center justify-end gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{activity.time}</span>
                  <span>•</span>
                  <span className="font-medium">{activity.type}</span>
                </div>
              </div>
              
              <div className={`w-3 h-3 rounded-full flex-shrink-0 mr-3 ${activity.color}`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Activities Link */}
      <div className="mt-6 text-center">
        <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          عرض جميع الأنشطة
        </button>
      </div>
    </div>
  );
};

export default CategoryActivity; 