import React from 'react';
import { orderQuickActions } from '../../../Constants/ordersData';

const OrderQuickActions = () => {
  const handleActionClick = (actionId) => {
    console.log(`Action ${actionId} clicked`);
    // Here you would implement the actual action logic
  };

  return (
    <div className="dashboard-card mb-8">
      <h2 className="section-title text-arabic text-right mb-6">إجراءات سريعة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {orderQuickActions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => handleActionClick(action.id)}
              className={`${action.bgColor} ${action.hoverColor} ${action.textColor} p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600 group`}
            >
              <div className="text-center">
                <div className={`mx-auto mb-3 p-3 rounded-full bg-white dark:bg-gray-700 shadow-md ${action.textColor} group-hover:scale-110 transition-transform duration-300 w-fit`}>
                  <Icon className="text-xl" />
                </div>
                <h3 className="font-semibold text-sm text-arabic">{action.title}</h3>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OrderQuickActions; 