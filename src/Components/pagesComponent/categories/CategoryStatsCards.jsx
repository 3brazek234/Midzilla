import React from 'react';
import { categoryStats } from '../../../Constants/categoriesData';

const CategoryStatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {categoryStats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div 
            key={index} 
            className={`dashboard-stat-card bg-gradient-to-br ${stat.bgGradient} dark:from-gray-800 dark:to-gray-700 slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.iconColor} bg-white dark:bg-gray-700 shadow-lg`}>
                <Icon className="text-xl" />
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${
                stat.isPositive 
                  ? 'growth-positive' 
                  : 'growth-negative'
              }`}>
                {stat.growth}
              </div>
            </div>
            
            <div className="text-arabic">
              <h3 className="stat-label text-right mb-2">{stat.title}</h3>
              <div className="flex items-baseline justify-end gap-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">{stat.unit}</span>
                <span className="stat-number text-right">{stat.value}</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-right">
                {stat.description}
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1 text-right">
                {stat.period}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryStatsCards; 