import React from 'react';
import { categoryQuickActions } from '../../../Constants/categoriesData';

const CategoryQuickActions = () => {
  const handleActionClick = (actionId) => {
    console.log(`Category action ${actionId} clicked`);
    // Here you would implement the actual action logic
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center space-x-3 space-x-reverse mb-8">
          <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
            <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-arabic">إجراءات سريعة</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryQuickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => handleActionClick(action.id)}
                className={`${action.bgColor} ${action.hoverColor} ${action.textColor} p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600 group`}
              >
                <div className="text-center">
                  <div className={`mx-auto mb-4 p-4 rounded-full bg-white dark:bg-gray-700 shadow-md ${action.textColor} group-hover:scale-110 transition-transform duration-300 w-fit`}>
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="font-semibold text-sm text-arabic">{action.title}</h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryQuickActions; 